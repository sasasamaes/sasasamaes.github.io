"use client";
import "./portfolio.css";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio } from "@/content_option";
import { GithubRepos } from "@/components/githubRepos";
import { GithubContributions } from "@/components/githuhContributions";

export default function PortfolioClient() {
  return (
    <Container className="About-header">
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Portfolio</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <div className="mb-5 po_items_ho">
        {dataportfolio.map((data, i) => (
          <div key={i} className="po_item">
            <img src={data.img} alt="" />
            <div className="content">
              <p>{data.description}</p>
              <a href={data.link}>view project</a>
            </div>
          </div>
        ))}
      </div>
      <GithubContributions />
      <GithubRepos />
    </Container>
  );
}
