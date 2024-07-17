import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100 movie-card">
      <Card.Img
        variant="top"
        src={movie.image}
        className="movie-card-img"
      />
      <Card.Body className="movie-card-body">
        {movie.status && (
          <span className={`movie-status ${movie.status.toLowerCase()}`}>
            {movie.status}
          </span>
        )}
        <Card.Title className="movie-card-title">{movie.title}</Card.Title>
        <Card.Text className="movie-card-text">{movie.description}</Card.Text>
        <Button variant="primary" className="movie-card-button" href={movie.link} target="_blank" rel="noopener noreferrer">Download Here</Button>
      </Card.Body>
      <Card.Footer className="movie-card-footer">
        <small className="text-muted">{movie.actor}</small>
      </Card.Footer>
    </Card>
  );
};

export default MovieCard;
