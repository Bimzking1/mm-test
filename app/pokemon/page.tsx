"use client"

import { useRouter } from 'next/navigation';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/navbar";
import Pokemon from "../components/pokemon";
import Footer from "../components/footer";

export default function PokemonPage() {

  const router = useRouter()
  const users = useSelector((state: any) => state.users);
  
  const [id, setId] = useState<string>('');

  useEffect(() => {
    for (let i = 0; i < users.length; i++) {
      if (users.length > 1){
        if ((users[i].username === (localStorage.getItem("username"))) && (users[i].password === (localStorage.getItem("password")))) {
          setId(users[i].id)
          localStorage.setItem("id", users[i].id)
          localStorage.setItem("handphone", users[i].handphone)
          localStorage.setItem("confirmPassword", users[i].confirmPassword)
        }
      }
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar/>

      <Pokemon/>

      <Footer/>
    </div>
  );
}
