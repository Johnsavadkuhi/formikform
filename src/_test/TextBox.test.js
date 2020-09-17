import React from 'react';
import {  getQueriesForElement, render, screen } from "@testing-library/react"
import TextBox from '../components/Auth/TextBox';

test("TextBox placeholder test ",()=>{

 const {getByPlaceholderText } = render(<TextBox type="text" placeholder="hi"/>)

 expect(getByPlaceholderText("hi")).toBeInTheDocument() ; 
//  expect(getByPlaceholderText("hi")).not.toBeNull(); 
expect(getByPlaceholderText("hi")).toContainHTML("hi")




}) ; 

