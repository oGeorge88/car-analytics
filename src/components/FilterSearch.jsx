import { Form, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import PropTypes from 'prop-types';

const FilterSearch = ({ onFilter }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onFilter(query.trim());
  };

  return (
    <Form onSubmit={handleSearch} className="w-100" role="search" aria-label="Car Search">
      <Row className="align-items-center g-2">
        <Col xs={8} sm={9} md={10}>
          <Form.Label htmlFor="search-input" visuallyHidden>Search Cars</Form.Label>
          <Form.Control
            id="search-input"
            type="text"
            placeholder="Type brand, model, year, price, or province..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ fontSize: '1.08rem', padding: '10px 14px', borderRadius: '8px', border: '1.5px solid #28a745' }}
            autoComplete="off"
            aria-label="Search cars by brand, model, year, price, or province"
          />
        </Col>
        <Col xs={4} sm={3} md={2} className="d-grid">
          <Button
            variant="success"
            type="submit"
            style={{ fontWeight: '500', fontSize: '1.08rem', borderRadius: '8px', padding: '10px 0' }}
            aria-label="Search"
          >
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FilterSearch.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
export default FilterSearch;
