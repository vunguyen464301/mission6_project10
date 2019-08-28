import Cors from 'micro-cors'
import Router from 'next/router'
import { resolveSoa } from 'dns';
import express from 'express';

const check = (req,res,next)=>{
    // if(res.body.name==='anhvu'){
    //  return next();
    // }
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify({ name: "Nothing !" }))
}
const demo=(req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify({ name: req.body.name }))
   

}

export const demo;