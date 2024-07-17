import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';
import imitationgame from '../../images/imitationgame.jpg';
import moneyball from '../../images/moneyball.jpeg';
import wolfofwall from '../../images/wolfofwall.jpeg';
import kalki from '../../images/kalki.jpeg';
import mirzapur from '../../images/mirzapur.jpeg';
import hacker from '../../images/hacker.jpeg';
import kota from '../../images/kota.jpeg';
import matrix from '../../images/matrix.jpeg';
import social from '../../images/social.jpg';

const MoviesGrid = () => {
  const movies = [
    { title: 'Kota Factory', description: 'Kota Factory portrays the struggles and aspirations of students in Kota, Indias coaching hub, as they prepare for competitive exams.', image:kota, actor: 'Mayur More as Vaibhav Pandey,Jitendra Kumar as Jeetu Bhaiya', status: 'Upcoming', link: 'https://luxmovies.live/download-kota-factory-season-3-hindi-480p-720p-1080p-netflix-original/' },
    { title: 'Kalki', description: 'Kalki is the prophesied tenth and final avatar of the Hindu god Vishnu, who is expected to appear in the future to end the current age of darkness and restore righteousness. According to Hindu tradition.', image:kalki, actor: 'Amitabh Bachchan,Prabhas,Deepika PadukoneKamal Haasan', status: 'Now Showing', link: 'https://luxmovies.live/kalki-2898-ad-2024-hindi-dubbed-full-movie-online-download-480p-720p-1080p-hdcamrip/' },
    { title: 'Mirzapur season 3', description: 'Mirzapur 3 continues the intense power struggle and revenge saga in the lawless town of Mirzapur, with Guddu seeking to dominate the throne and avenge his familys losses.', image:mirzapur, actor: 'Pankaj Tripathi as Akhandanand "Kaleen Bhaiya" Tripathi, Ali Fazal as Guddu Pandit', status: 'Upcoming', link: 'https://luxmovies.live/download-mirzapur-s03-complete-hindi-web-series-480p-720p-1080p-2160p-web-dl-prime-video/' },
    { title: 'The Social Network', description: ' A dramatic retelling of the founding of Facebook and the legal battles that followed.', image:social, actor: 'Jesse Eisenberg, Andrew Garfield', status: 'Now Showing', link: 'https://vegamovies.lt/20040-the-social-network-2010-hindi-dual-audio-720p-bluray-800mb.html' },
    { title: 'The Imitation Game', description: 'Alan Turing and his team race against time to crack the German Enigma code during World War II, saving countless lives.', image: imitationgame, actor: 'Benedict Cumberbatch, Keira Knightley', status: 'Upcoming', link: 'https://vegamovies.lt/13311-the-imitation-game-2014-dual-audio-hindi-english-bluray-hevc-190mb.html' },
    { title: 'Moneyball', description: 'A data-driven approach to assembling a competitive baseball team challenges conventional wisdom in sports management.', image: moneyball, actor: 'Brad Pitt, Jonah Hill', status: 'Now Showing', link: 'https://vegamovies.lt/21930-moneyball-2011-hindi-dual-audio-720p-web-dl-1-2gb.html' },
    { title: 'The Wolf of Wall Street', description: 'The rise and fall of Jordan Belfort, a stockbroker who lived a lavish lifestyle fueled by corruption and fraud on Wall Street.', image: wolfofwall, actor: 'Leonardo DiCaprio, Jonah Hill', status: 'Upcoming', link: 'https://vegamovies.lt/31386-stree-2018-hindi-movie-720p-hdrip-x264-1-3gb.html' },
    
    { title: 'Hackers', description: 'A group of young hackers battles against corporate greed and cyber espionage in this high-tech thriller.', image: hacker, actor: 'Angelina Jolie, Jonny Lee Miller', status: 'Now Showing', link: 'https://dotmovies.cab/58265-irah-2024-hindi-cam-1080p.html' },
    
    { title: 'The Matrix', description: 'Neo, a computer hacker, discovers the shocking truth about his existence and joins a rebellion against sentient machines controlling humanitys simulated reality.', image: matrix, actor: 'Keanu Reeves, Laurence Fishburne', status: 'Now Showing', link: 'https://vegamovies.lt/28758-the-matrix-resurrections-2021.html' },
  ];

  return (
    <Container className="">
      <h2 className="text-center mb-4">Movie Listings</h2>
      <Row>
        {movies.map((movie, idx) => (
          <Col key={idx} sm={12} md={6} lg={4} className="mb-4">
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MoviesGrid;
