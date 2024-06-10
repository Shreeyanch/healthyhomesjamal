import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./form.module.css";
import { FormEvent } from "react";
import React, { useState } from 'react';




const Form:NextPage= () => {
  const [Name, setName]=useState('')
  const [Contactdetails, setContactdetails]=useState('')
  const [Email, setEmail]=useState('')
  const [Howcanweimprove, setHowcanweimprove]=useState('')

  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = {
      Name,
      Contactdetails,
      Email,
      Howcanweimprove,
    };
    console.log(form);
  
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const content = await response.json();
      alert("Your review has been submitted.");
      
      setName('');
      setContactdetails('');
      setEmail('');
      setHowcanweimprove('');
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      alert("There was an error submitting your review. Please try again.");
    }
  };
  return (
    <form className={[styles.form].join(" ")} name="Name"  onSubmit={handleSubmit}>
      <div className={styles.yourFeedbackIs}>YOUR FEEDBACK IS VALUABLE</div>
      <div className={styles.formFields}>
        <div className={styles.nameInput}>
          <TextField
            className={styles.input}
            color="primary"
            name="Name"
            label="Name"
            required={true}
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            value={Name}
            onChange={e=>setName(e.target.value)}
          />
        </div>
        <div className={styles.nameInput}>
          <TextField
            className={styles.input}
            color="primary"
            name="Contactdetails"
            label="Contact details"
            size="medium"
            required={true}
            variant="outlined"
            type="text"
            sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            value={Contactdetails}
            onChange={e=>setContactdetails(e.target.value)}
            
          />
        </div>
        <div className={styles.nameInput}>
          <TextField
            className={styles.input}
            color="primary"
            name="Email"
            label="Email"
            required={true}
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "56px" } }}
            value={Email}
            onChange={e=>setEmail(e.target.value)}
          />
        </div>
        <div className={styles.nameInput}>
          <TextField
            className={styles.input3}
            color="primary"
            name="Howcanweimprove"
            rows={4}
            label="How can we improve"
            placeholder="How can we improve"
            required={true}
            variant="outlined"
            multiline
            value={Howcanweimprove}
            onChange={e=>setHowcanweimprove(e.target.value)}
          />
        </div>
      </div>
      <button className={styles.formSubmitButton}>
        <div className={styles.submit}>Submit</div>
      </button>
    </form>
  );
};

export default Form;
