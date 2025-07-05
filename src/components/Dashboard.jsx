import { useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  Container,
  Pagination,
  Form,
  Button,
} from "react-bootstrap";
import FilterSearch from "./FilterSearch";
import { Link } from "react-router-dom";
import Carousels from "./Carousels";
import { FaArrowUp, FaArrowDown, FaStar, FaRegStar } from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";
import { useMediaQuery } from "react-responsive";

const Dashboard = () => {
  const [carData, setCarData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortCriteria, setSortCriteria] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [visibleItems, setVisibleItems] = useState(30); // State for Load More
  const itemsPerPage = 21;

  // Determine if the device is mobile
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    fetch("/car-analytics1/cars.json")
      .then((response) => response.json())
      .then((data) => {
        const carsWithHighlight = data.Cars.map((car) => ({
          ...car,
          highlighted:
            localStorage.getItem(`highlighted_${car.Cid}`) === "true",
        }));
        setCarData(carsWithHighlight);
        setFilteredData(carsWithHighlight);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleFilter = (query) => {
    const normalizedQuery = query.replace(/,/g, "").toLowerCase();
    const filtered = carData.filter((car) => {
      const normalizedPrice = (car.Prc || "").replace(/,/g, "");
      return (
        (car.NameMMT || "").toLowerCase().includes(normalizedQuery) ||
        (car.Model || "").toLowerCase().includes(normalizedQuery) ||
        (car.Yr || "").toString().includes(normalizedQuery) ||
        normalizedPrice.includes(normalizedQuery) ||
        (car.Province || "").toLowerCase().includes(normalizedQuery)
      );
    });
    setFilteredData(filtered);
    setCurrentPage(1);
    setVisibleItems(itemsPerPage); // Reset visible items on filter change
  };

  const handleSortChange = (criteria) => {
    const newDirection =
      sortCriteria === criteria && sortDirection === "asc" ? "desc" : "asc";
    setSortCriteria(criteria);
    setSortDirection(newDirection);
    sortData(criteria, newDirection);
  };

  const sortData = (criteria, direction) => {
    let sortedData = [...filteredData];
    const compare = (a, b) => {
      if (criteria === "price") {
        const priceA = parseFloat(a.Prc.replace(/,/g, ""));
        const priceB = parseFloat(b.Prc.replace(/,/g, ""));
        return direction === "asc" ? priceA - priceB : priceB - priceA;
      } else if (criteria === "year") {
        return direction === "asc" ? a.Yr - b.Yr : b.Yr - a.Yr;
      } else if (criteria === "name") {
        return direction === "asc"
          ? a.NameMMT.localeCompare(b.NameMMT)
          : b.NameMMT.localeCompare(a.NameMMT);
      } else if (criteria === "model") {
        return direction === "asc"
          ? a.Model.localeCompare(b.Model)
          : b.Model.localeCompare(a.Model);
      }
      return 0;
    };
    sortedData.sort(compare);
    setFilteredData(sortedData);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= Math.ceil(filteredData.length / itemsPerPage)) {
      setCurrentPage(page);
      setVisibleItems(page * itemsPerPage); // For non-mobile, set the visible items based on the current page
    }
  };

  const handleLoadMore = () => setVisibleItems((prev) => prev + itemsPerPage);

  const toggleHighlight = (Cid) => {
    const updatedCarData = carData.map((car) => {
      if (car.Cid === Cid) {
        const updatedHighlightStatus = !car.highlighted;
        localStorage.setItem(`highlighted_${Cid}`, updatedHighlightStatus);
        return { ...car, highlighted: updatedHighlightStatus };
      }
      return car;
    });
    setCarData(updatedCarData);
    setFilteredData(updatedCarData);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = isMobile
    ? filteredData.slice(0, visibleItems)
    : filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <>
      <Carousels />
      <Container style={{ marginTop: "70px" }}>
        <h2
          className="text-center"
          style={{ color: "#023047", fontWeight: "bold" }}
        >
          Car Analytics Dashboard
        </h2>
        <div className="d-flex justify-content-center my-4">
          <FilterSearch onFilter={handleFilter} />
        </div>
        <Form.Group
          controlId="sortSelect"
          className="mt-3 d-flex align-items-center justify-content-center"
        >
          <Form.Label
            className="me-2"
            style={{ fontWeight: "bold", color: "#023047" }}
          >
            Sort By:
          </Form.Label>
          <Button
            variant="link"
            onClick={() => handleSortChange("name")}
            className="text-decoration-none"
            style={{ color: "#28a745" }}
          >
            Name{" "}
            {sortCriteria === "name" &&
              (sortDirection === "asc" ? <FaArrowUp /> : <FaArrowDown />)}
          </Button>
          <Button
            variant="link"
            onClick={() => handleSortChange("model")}
            className="text-decoration-none"
            style={{ color: "#28a745" }}
          >
            Model{" "}
            {sortCriteria === "model" &&
              (sortDirection === "asc" ? <FaArrowUp /> : <FaArrowDown />)}
          </Button>
          <Button
            variant="link"
            onClick={() => handleSortChange("year")}
            className="text-decoration-none"
            style={{ color: "#28a745" }}
          >
            Year{" "}
            {sortCriteria === "year" &&
              (sortDirection === "asc" ? <FaArrowUp /> : <FaArrowDown />)}
          </Button>
          <Button
            variant="link"
            onClick={() => handleSortChange("price")}
            className="text-decoration-none"
            style={{ color: "#28a745" }}
          >
            Price{" "}
            {sortCriteria === "price" &&
              (sortDirection === "asc" ? <FaArrowUp /> : <FaArrowDown />)}
          </Button>
        </Form.Group>
        <Row className="mt-3 gy-4">
          {currentItems.length > 0 ? (
            currentItems.map((car) => (
              <Col
                sm={12}
                md={6}
                lg={4}
                key={car.Cid}
                className="d-flex align-items-stretch"
              >
                <Card
                  className="w-100 shadow-lg rounded-3"
                  style={{
                    borderColor: car.highlighted ? "#de1a52" : "#ffffff",
                  }}
                >
                  <Card.Body
                    className="d-flex flex-column"
                    style={{
                      backgroundColor: car.highlighted
                        ? "#d35e241a"
                        : "#ffffff",
                    }}
                  >
                    <Card.Title
                      className="text-center"
                      style={{ color: "#023047", fontWeight: "bold" }}
                    >
                      <Link
                        to={`/car-analytics1/car/${car.Cid}`}
                        className="text-decoration-none"
                        style={{ color: "#023047" }}
                      >
                        {car.NameMMT}
                      </Link>
                    </Card.Title>
                    <Card.Text
                      className="mb-4 text-center"
                      style={{ color: "#023047" }}
                    >
                      Model: {car.Model} <br />
                      Year: {car.Yr} <br />
                      Price: {car.Prc} {car.Currency} <br />
                      Province: {car.Province} <br />
                    </Card.Text>
                    <div className="mt-auto text-center">
                      <Link to={`/car-analytics1/car/${car.Cid}`}>
                        {car.Img300 && (
                          <img
                            src={car.Img300}
                            alt={car.Model}
                            style={{ width: "100%", borderRadius: "10px" }}
                          />
                        )}
                      </Link>
                    </div>
                    <Button
                      variant={car.highlighted ? "danger" : "success"}
                      onClick={() => toggleHighlight(car.Cid)}
                      className="mt-3 d-flex align-items-center justify-content-center"
                    >
                      {car.highlighted ? "Remove Highlight" : "Highlight"}
                      {car.highlighted ? (
                        <FaStar className="ms-2" />
                      ) : (
                        <FaRegStar className="ms-2" />
                      )}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center" style={{ color: "#023047" }}>
              No results found.
            </p>
          )}
        </Row>

        {isMobile ? (
          visibleItems < filteredData.length && (
            <div className="d-flex justify-content-center mt-4">
              <Button variant="success" onClick={handleLoadMore}>
                Load More
              </Button>
            </div>
          )
        ) : (
          <Pagination className="mt-4 d-flex justify-content-center">
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        )}
        <ScrollToTop />
      </Container>
    </>
  );
};

export default Dashboard;
