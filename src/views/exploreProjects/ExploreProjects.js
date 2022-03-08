import React, { useEffect, useState } from "react";
import image from "../../assets/images/Rectangle7.jpg";
import Card from "../../components/Card/Card";
import SideBar from "../../components/Sidenav/Sidenav";
import { useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./ExploreProjects.css";
import { handleData } from "../../redux/actions";
import { EXPLORE_PROJECTS, LOADING_START } from "../../constants/Routes";
import { useDispatch, useSelector } from "react-redux";
import LoadingOverlay from "react-loading-overlay";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  let history = useHistory();

  return (
    <>
      {currentItems.length > 0 &&
        currentItems.map((item) => (
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Card
              project={item}
              className="card"
              width={"auto"}
              addbtn={false}
              image={image}
              onClick={() => history.push(`/app/view-project/${item._id}`)}
            />
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader.loading);
  const projects = useSelector((state) => state.project.explore);

  useEffect(() => {
    dispatch(handleData(true, LOADING_START));
    dispatch(handleData({}, EXPLORE_PROJECTS));
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <LoadingOverlay active={loading} spinner text="" />
      <Items currentItems={projects} />
      <ReactPaginate
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        activeClassName={"active"}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

function ExploreProjects() {
  return (
    <div className="explorePage">
      <div className="container">
        <h3>
          Explore Projects
          <span />
        </h3>
        <div className="text-end mt-6">
          <label className="labeltext">Sort by:</label>
          <select className="selectClass">
            <option value="Likes">Likes</option>
            <option value="Most Funded">Most Funded</option>
            <option value="Day Posted">Day Posted</option>
            <option value="Alphabetic Order">Alphabetic Order</option>
          </select>
          <label className="labeltext">Filter by:</label>
          <select className="selectClass">
            <option value="Categories">Categories</option>
            <option value="Project">Project</option>
            <option value="Objectives">Objectives</option>
          </select>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="mgt-90 mr-20" style={{ position: "relative" }}>
            <SideBar />
          </div>
          <div id="main">
            <div className="row mt-40 p-80">
              <PaginatedItems itemsPerPage={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreProjects;
