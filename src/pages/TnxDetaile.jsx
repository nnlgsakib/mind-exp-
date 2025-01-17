import { Alert, Button } from "@mui/material";
import React, { useState } from "react";

import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineClockCircle,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { CgCopy, CgLock } from "react-icons/cg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "../components/latest transactions/LatestTrans.css";
import { BsClockFill } from "react-icons/bs";
const TnxDetaile = () => {
  let [overView, setOverview] = useState(true);
  let [logs, SetLogs] = useState(false);
  let [seeMore, setSeeMore] = useState(false);
  let [tnxHash, setTnxHash] = useState(
    "0xc9f9c6808c810fcabd6e00fbd1b7fccc2f8d1cd88ac47aca155c87ea6495ab94"
  );
  let [from, setFrom] = useState(
    "0xc9f9c6808c810fcabd6e00fbd1b7fccc2f8d1cd88ac47aca155c87ea6495ab98"
  );
  let [contract, setContract] = useState(
    "0xc9f9c6808c810fcabd6e00fbd1b7fccc2f8d1cd88ac47aca155c87ea6495ab98"
  );

  let seeMoreBtn = () => {
    setSeeMore((prev) => !prev);
  };

  let copyTnxHash = () => {
    toast("Transaction Hash Copied!");
    navigator.clipboard.writeText(tnxHash);
  };

  let copyFrom = () => {
    toast("From address Copied");
    navigator.clipboard.writeText(from);
  };

  let copyContract = () => {
    toast("Contract Copied");
    navigator.clipboard.writeText(from);
  };

  return (
    <div>
      <ToastContainer />
      <div className="container ">
        <div className="w-full relative  mb-9 mt-[-20px] shadow-xl md:rounded-tr-md rounded-b-md px-3 bg-white dark:!bg-liteBlack">
          <div className="p-3 h-[70px] flex text-[12px] md-text-base justify-between items-center w-full md:w-[50%] absolute top-[-70px] rounded-t-md left-0 z-3 border-b dark:text-white text-liteBlack  bg-white dark:!bg-liteBlack">
            <h4 className="font-semibold m-4 text-primaryColor">
              Transaction Details
            </h4>{" "}
          </div>
          <div className="flex gap-x-3 pt-3 pb-3">
            <Button
              variant={`${overView ? "contained" : "outlined"}`}
              onClick={() => {
                setOverview(true);
                SetLogs(false);
              }}
              className="!capitalize "
            >
              Overview
            </Button>
            <Button
              variant={`${logs ? "contained" : "outlined"}`}
              onClick={() => {
                SetLogs(true);
                setOverview(false);
              }}
              className="!capitalize"
            >
              Logs
            </Button>
          </div>
          {
            overView && (
              <ul className="p-0 m-0">
            <li className="py-2 border-b md:flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" /> Transaction
                Hash:
              </div>
              <div className="w-[100%] md:w-[80%] flex gap-x-2 itemsfsdghhdghshg-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                {tnxHash}{" "}
                <CgCopy
                  className="text-[18px] hover:text-ashText"
                  onClick={copyTnxHash}
                />{" "}
                {/* {currentBlockDetails.timeStamp.hourseAgo}(
                {currentBlockDetails.timeStamp.standardTime}) */}
              </div>
            </li>
            <li className="py-2 border-b md:flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" /> Status:
              </div>
              <div className="w-[100%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                <Alert severity="success">Success</Alert>
              </div>
            </li>
            <li className="py-2 border-b md:flex items-center overflow-hidden">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />
                Block:
              </div>
              <div className="w-[100%] md:w-[80%] md:flex gap-x-2 items-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                <Link to="/blocks" className="text-primaryColor">
                  1285673
                </Link>
                <div className="list-polygon bg-primaryHover   uppercase pl-10 pr-3 pb-1 pt-1 text-[12px] font-semibold text-primaryColor">
                  <span>421 Block Confirmation</span>
                </div>
              </div>
            </li>
            <li className="py-2 border-b flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />
                Time Stamp:
              </div>
              <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white">
                <BsClockFill />
                35 mins ago (2023-05-10T19:11:19.000+0000)
              </div>
            </li>
            <li className="py-2  flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />
                From:
              </div>
              <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white">
                <Link to="" className="text-primaryColor">
                  {from}
                </Link>{" "}
                <CgCopy
                  className="text-[18px] hover:text-ashText"
                  onClick={copyFrom}
                />
              </div>
            </li>
            <li className="py-2 border-b flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />
                To:
              </div>
              <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white">
                Contract
                <Link to="" className="text-primaryColor">
                  {contract}
                </Link>{" "}
                <CgCopy
                  className="text-[18px] hover:text-ashText"
                  onClick={copyContract}
                />
              </div>
            </li>
            <li className="py-2 border-b flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />
                Value:
              </div>
              <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white">
                <span>0.022541922 CORE ($0.02)</span>
              </div>
            </li>
            <li className="py-2  flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />
                Transaction Fee:
              </div>
              <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white">
                <span>0 CORE ( $0)</span>
              </div>
            </li>

            {seeMore && (
              <>
                <li className="py-2 border-b flex items-center">
                  <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                    <AiOutlineQuestionCircle className="text-[18px]" />
                    Gas Limit:
                  </div>
                  <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white">
                    <span>fdgsdfgsfdgfd</span>
                  </div>
                </li>

                <li className="py-2 border-b md:flex items-center overflow-hidden">
                  <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                    <AiOutlineQuestionCircle className="text-[18px]" /> Gas Used
                    by Transaction:
                  </div>
                  <div className="w-[100%] md:w-[80%] md:flex gap-x-2 items-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                    <Link className="text-primaryColor">19,007 (3.8%)</Link>
                  </div>
                </li>
                <li className="py-2 border-b md:flex items-center overflow-hidden">
                  <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                    <AiOutlineQuestionCircle className="text-[18px]" /> Gas
                    Price:
                  </div>
                  <div className="w-[100%] md:w-[80%] md:flex gap-x-2 items-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                    0 Mind (0GWei)
                  </div>
                </li>
                <li className="py-2 border-b md:flex items-center overflow-hidden">
                  <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                    <AiOutlineQuestionCircle className="text-[18px]" /> Nonce{" "}
                    <span className="p-1 bg-primaryHover rounded-md">
                      Position
                    </span>
                  </div>
                  <div className="w-[100%] md:w-[80%] md:flex gap-x-2 items-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                    138754{" "}
                    <span className="p-1 bg-primaryHover rounded-md">7</span>
                  </div>
                </li>

                <li className="py-2  md:flex items-center">
                  <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                    <AiOutlineQuestionCircle className="text-[18px]" />
                    Input Data:
                  </div>
                  <div className="w-[100%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                    <textarea
                      defaultValue=" Function: deposit(address valAddr)

                      MethodID: 0xf340fa01
                      [1] 0000000000000000000000002efd3cf0733421aec3e4202480d0a90bd1575149"
                      className="w-full h-[100px]"
                      disabled
                    ></textarea>
                  </div>
                </li>
              </>
            )}

            <li className="py-2 border-b  md:flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" /> More
                Details:
              </div>
              <div className="w-[100%] md:w-[80%] md:flex gap-x-2 items-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                <Link className="text-primaryColor flex" onClick={seeMoreBtn}>
                  Click here to see more&nbsp;
                  {!seeMore ? (
                    <span className="flex items-center">
                      <AiOutlineArrowDown />
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <AiOutlineArrowUp />
                    </span>
                  )}
                </Link>
              </div>
            </li>
            <li className="py-2 border-b md:flex  overflow-hidden">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" /> Gas Private
                Note:
              </div>
              <div className="w-[100%] md:w-[80%] md:flex gap-x-2 items-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                <div className="">
                  <input type="text" className="!border-primaryColor border  !outline-none w-full  bg-white dark:!bg-liteBlack rounded-md p-1" />
                  <p className="text-[12px] text-liteBlack dark:text-white mt-2">
                    Tip: A private note (up to 100 characters) can be saved and
                    is useful for transaction tracking. Please DO NOT store any
                    passwords or private keys here.
                  </p>
                </div>
              </div>
            </li>
          </ul>
            )
          }
          {
            logs && (
              <>
              sdf
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default TnxDetaile;
