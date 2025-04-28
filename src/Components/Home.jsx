import { Link } from 'react-router-dom';
import React from 'react'
import { color, motion, rgba } from "framer-motion";

const Home = () => {
  const handleInput = () => {

  }

  return ( 
    <div className='Nickname'>
      <motion.h1
        style={{ overflow: "hidden", whiteSpace:
          "nowrap"}}
        initial={{ width: 0, color: " #FF435531" }} 
        animate={{ width: "100%", color: ["rgba(15, 116, 225, 0.19)", " #4c6ef5",
          "      #1a3e96", " #ff0000" ]}}
        transition={{ duration: 2, ease:
          "easeInOut", repeat:
          Infinity }}
      > 
        UQuiz?  
        
        
      </motion.h1>
      <form className="w-5/6 max-w-md mx-auto">
         
         <input 
         className="border rounded text-lg 
         leading-tight py-3 px-2 mt-4 
         focus:outline-indigo-200"
         id="nickName" 
         name="nickName"
         placeholder="닉네임을 입력하세요."
         onChange={handleInput}
         />

      </form>
        
        <Link to='/' className='btn'> 시작하기 </Link>
    </div>
    );
  };


export default Home;
  


