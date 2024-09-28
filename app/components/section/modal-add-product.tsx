import { addProduct } from '@/app/redux/slices/productSlice';
import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as yup from 'yup';

interface ModalProps {
  onClose: () => void;
}

const ModalAddProduct: React.FC<ModalProps> = ({
  onClose
}) => {
  const schema = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
    price: yup.number().required().min(1),
    stock: yup.number().required().min(1)
  });

  const dispatch = useDispatch()
  const [productName, setProductName] = useState<string>('');
  const [productPrice, setProductPrice] = useState<number>(0);
  const [productStock, setProductStock] = useState<number>(0);

  const handleAddProduct = () => {
    const newProduct = {
      id: nanoid(),
      name: productName,
      price: productPrice,
      stock: productStock
    };

    schema.validate(newProduct)
      .then(() => {
        toast.success(`Input data success!`)
        dispatch(addProduct(newProduct));
        onClose()
      })
      .catch(() => 
        toast.error(`Input data failed!`)
      );
  }
  
  return (    
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
        <div className='flex justify-between items-center mb-4'>
          <div className='font-semibold text-lg text-[#666666]'>
            Input Produk
          </div>
          <div
            onClick={onClose}
            className='w-[28px] h-[28px] flex justify-center items-center cursor-pointer hover:scale-125 duration-300'
          >
            <IoMdClose className='w-full h-full'/>
          </div>
        </div>
        <hr/>
        <form className='text-[#1c1c1c] dark:text-[#FBFAF5] mt-4'>
          <div className="mb-4">
            <label className="mb-2.5 block font-semibold text-[#666666] dark:text-[#FBFAF5] duration-300">
                Nama Produk
            </label>
            <div className="relative">
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Input nama produk"
                className="w-full rounded-lg border border-[#494949] bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="mb-2.5 block font-semibold text-[#666666] dark:text-[#FBFAF5] duration-300">
                Harga Produk
            </label>
            <div className="relative">
              <input
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.valueAsNumber)}
                placeholder="Input harga produk"
                className="w-full rounded-lg border border-[#494949] bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="mb-2.5 block font-semibold text-[#666666] dark:text-[#FBFAF5] duration-300">
                Jumlah Stok
            </label>
            <div className="relative">
              <input
                type="number"
                value={productStock}
                onChange={(e) => setProductStock(e.target.valueAsNumber)}
                placeholder="Input jumlah stok"
                className="w-full rounded-lg border border-[#494949] bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
          </div>
          <div className='flex justify-between items-center mt-8'>
            <div
              onClick={onClose}
              className='py-2 px-4 border-2 border-[#a5a5a5] rounded-lg cursor-pointer hover:bg-gray-400 duration-300'
            >
              Cancel
            </div>
            <div
              onClick={() => handleAddProduct()}
              className='py-2 px-4 border-2 bg-green-600 rounded-lg cursor-pointer hover:bg-green-700 duration-300 text-white'
            >
              Save
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalAddProduct