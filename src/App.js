import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./App.css";
import { Tooltip } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//API Key: YCW115IUSK8A7IGEM77D4UIWA3IHRDDDIB;
//Token Contract address: 0xa883a9dbdea417c8a05b2c9963792c2038e1d841;

function App() {
  const [shimekaPrice, setShimekaPrice] = useState();
  const [shibPrice, setShibPrice] = useState();
  const [ethPrice, setEthPrice] = useState();
  const [btcPrice, setBtcPrice] = useState();
  const tooltipRef = useRef();
  useEffect(() => {
    const tooltip = new Tooltip(tooltipRef.current, {
      title: "copy to clipboard",
      placement: "top",
      trigger: "hover",
    });
  }, []);

  useLayoutEffect(() => {
    axios
      .get(
        "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xa883a9dbdea417c8a05b2c9963792c2038e1d841&address=0xe04f27eb70e025b78871a2ad7eabe85e61212761&tag=latest&apikey=YCW115IUSK8A7IGEM77D4UIWA3IHRDDDIB"
      )
      .then((res) => {
        setShimekaPrice(Number(res.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce&address=0xe04f27eb70e025b78871a2ad7eabe85e61212761&tag=latest&apikey=YCW115IUSK8A7IGEM77D4UIWA3IHRDDDIB"
      )
      .then((res) => {
        setShibPrice(Number(res.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      )
      .then((res) => {
        setBtcPrice(res.data.bitcoin.usd);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      )
      .then((res) => {
        setEthPrice(res.data.ethereum.usd);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App fluid-container">
      <div className="top">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="Header"
        >
          <h1 className="header-text">SHIMEKA</h1>
          <a href="https://app.uniswap.org/#/swap?outputCurrency=0xa883a9dbdea417c8a05b2c9963792c2038e1d841&inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&chain=eth">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              className="header-btn"
              id="top"
            >
              BUY $SHIMEKA
            </motion.button>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="real-header"
        >
          <h1 className="real-header-title">SHIMEKA</h1>
          <p className="real-header-subtitle">INU TOKEN</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="socials"
        >
          <a
            style={{ textDecoration: "none" }}
            onClick={() => {
              navigator.clipboard.writeText(
                "0xa883a9dbdea417c8a05b2c9963792c2038e1d841"
              );
            }}
            className="socials-text"
            ref={tooltipRef}
          >
            CONTRACT ADDRESS ↗
          </a>
          <span className="socials-icons">
            <a
              style={{ textDecoration: "none" }}
              href="https://t.me/shimekainu"
              target={"_blank"}
            >
              <motion.img
                whileHover={{ y: -10 }}
                whileTap={{ scale: 1.1 }}
                src="socials/telegram.png"
                className="telegram"
              ></motion.img>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://twitter.com/shimekatoken"
              target={"_blank"}
            >
              <motion.img
                whileHover={{ y: -10 }}
                whileTap={{ scale: 1.1 }}
                src="socials/twitter.png"
                className="twitter"
              ></motion.img>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://medium.com/@shimekainu"
              target={"_blank"}
            >
              <motion.img
                whileHover={{ y: -10 }}
                whileTap={{ scale: 1.1 }}
                src="socials/medium.png"
                className="medium"
              ></motion.img>
            </a>
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="fluid-container row"
        >
          <div className="col-6">
            <img src="images/cat-image.png" className="cat" />
          </div>
          <div className="col-6 div-text-1">
            <div>
              <h1 className="paragraph-1">
                ABOUT THE<br></br> PROJECT
              </h1>
              <p className="paragraph-2">
                The youngest of a respected Shiba Inu family, determined to
                prove herself. Now a friendly, accessible meme token for all
                holders. Proving age is just a number. $SHIMEKA INU TOKEN
                ✨🐶💜🧬 #SHIBARIUM
              </p>
              <a href="https://app.uniswap.org/#/swap?outputCurrency=0xa883a9dbdea417c8a05b2c9963792c2038e1d841&inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&chain=eth">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.1 }}
                  className="btn-2"
                ></motion.button>
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h1 className="paragraph-3">TOKEN</h1>
          <p className="paragraph-4">
            Shimeka Inu Token is a revolutionary new Decentralized Meme Token on
            the Ethereum Network that is set to disrupt the Shibarium
            Blockchain.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="box"
        >
          <h1 className="paragraph-5">
            OUR FUTURE<br></br> STARTING TODAY
          </h1>
          <p className="paragraph-6">
            Our token is designed to bring memes & diversity to the Shibarium
            ecosystem through innovative new reward streams as well as exciting
            new partnership opportunities. We are dedicated to creating a future
            where holders of our token can reap the benefits of a diverse and
            thriving ecosystem.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="box-2"
        >
          <h1 className="paragraph-7">
            OUR<br></br>WHITEPAPER
          </h1>
          <a href="shimeka.pdf" target={"_blank"}>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              className="btn-3"
            ></motion.button>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="box-3"
        >
          <h1 className="paragraph-8">MARKET OVERVIEW</h1>
          <p className="paragraph-9">
            Shibarium Ecosystem and the exciting possibilities that Shimeka Inu
            Token holds.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="box-4"
        >
          <div className="row">
            <div className="col price">
              <motion.span
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="shimeka-price prices"
              >
                {parseInt(shimekaPrice)}
              </motion.span>
              <h1 className="shimeka tags">$SHIMEKA</h1>
            </div>
            <div className="col price">
              <motion.span
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="shib-price prices"
              >
                {parseInt(shibPrice)}
              </motion.span>
              <h1 className="shib tags">$SHIB</h1>
            </div>
            <div className="col space"></div>
          </div>
          <div className="row">
            <div className="col price">
              <motion.span
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="btc-price prices"
              >
                {parseInt(btcPrice)}
              </motion.span>
              <h1 className="btc tags">$BTC</h1>
            </div>
            <div className="col price">
              <motion.span
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className="eth-price prices"
              >
                {parseInt(ethPrice)}
              </motion.span>
              <h1 className="eth tags">$ETH</h1>
            </div>
            <div className="col space"></div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="box-5"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="box-6"
        >
          <h1 className="cta">BUY $SHIMEKA</h1>
          <a href="https://app.uniswap.org/#/swap?outputCurrency=0xa883a9dbdea417c8a05b2c9963792c2038e1d841&inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&chain=eth">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              className="btn-4"
            ></motion.button>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="row fluid-container footer"
        >
          <div className="col-sm-6">
            <h1 className="paragraph-10">SHIMEKA</h1>
            <p className="paragraph-11">
              Shimeka set out from the valley, her eyes fixed on the summit, and
              heart filled with purpose. The journey was long and arduous, but
              Shimeka was relentless, and its perseverance was unmatched. With
              every step, the token grew stronger, and the wind that once
              threatened to push it down became a gentle breeze, lifting it
              higher and higher.” 🌬️🍃✨- Dev
            </p>
          </div>
          <div className="col-6 col-sm-3 second-col">
            <a href="#top" style={{ textDecoration: "none" }}>
              <p className="paragraph-12">Back to Top</p>
            </a>
            <p className="paragraph-12">Privacy Policy </p>
            <p className="paragraph-12">Terms of Service</p>
            <p className="paragraph-12">Legal Overview</p>
          </div>
          <div className="col-6 col-sm-3">
            <a
              style={{ textDecoration: "none" }}
              href="https://t.me/shimekainu"
              target={"_blank"}
            >
              <p className="paragraph-12">Telegram</p>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://twitter.com/shimekatoken"
              target={"_blank"}
            >
              <p className="paragraph-12">Twitter</p>
            </a>
            <a style={{ textDecoration: "none" }} href="" target={"_blank"}>
              <p className="paragraph-12">Medium</p>
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <p className="paragraph-13">
            Copyright © 2023 Shimeka Inu Token - All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
