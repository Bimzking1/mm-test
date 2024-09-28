"use client"

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import { useRouter } from 'next/navigation';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalAddProduct from "./components/section/modal-add-product";
import ListProduct from "./components/section/list-product";
import ModalEditProduct from "./components/section/modal-edit-product";

export default function Home() {

  const router = useRouter()

  const users = useSelector((state: any) => state.users);
  const product = useSelector((state: any) => state.product);

  const [editedProduct, setEditedProduct] = useState<number>(0)
  const [showModalAddProduct, setShowModalAddProduct] = useState<boolean>(false)
  const [showModalEditProduct, setShowModalEditProduct] = useState<boolean>(false)
  const [showModalConfirmDelete, setShowModalConfirmDelete] = useState<boolean>(false)

  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <Navbar/>
      <div className="h-fit text-black w-full xl:w-[1280px] relative px-4 xl:px-0 my-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            Goods Catalog
          </div>
          <div
            className="bg-green-700 rounded-lg cursor-pointer w-fit px-4 py-2 text-white"
            onClick={()=> setShowModalAddProduct(true)}
          >
            Add Product
          </div>
        </div>
        {
          showModalAddProduct &&
            <div className="absolute left-0 right-0 m-auto">
              <ModalAddProduct
                onClose={() => setShowModalAddProduct(false)}
              />
            </div>
        }
        {
          showModalEditProduct &&
            <div className="absolute left-0 right-0 m-auto">
              <ModalEditProduct
                data={product?.items}
                editedProduct={editedProduct}
                onClose={() => setShowModalEditProduct(false)}
              />
            </div>
        }
        {
          product?.items?.length > 0 &&
            <ListProduct
              data={product?.items}
              showModalConfirmDelete={showModalConfirmDelete}
              setShowModalConfirmDelete={setShowModalConfirmDelete}
              showModalEditProduct={showModalEditProduct}
              setShowModalEditProduct={setShowModalEditProduct}
              setEditedProduct={setEditedProduct}
            />
        }
      </div>

      <Footer/>
    </div>
  );
}
