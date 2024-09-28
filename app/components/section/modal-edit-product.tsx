import { editProduct, ItemsI } from '@/app/redux/slices/productSlice';
import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as yup from 'yup';

interface ModalProps {
  data: ItemsI[];
  editedProduct: number;
  onClose: () => void;
}

const ModalEditProduct: React.FC<ModalProps> = ({
  data,
  editedProduct,
  onClose
}) => {
  const schema = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
    price: yup.number().required().min(1),
    stock: yup.number().required().min(1)
  });

  const dispatch = useDispatch()

  const [form, setForm] = useState<ItemsI>({
    id: '',
    name: '',
    price: 0,
    stock: 0
  });

  useEffect(() => {
    setForm({
      id: data[editedProduct]?.id,
      name: data[editedProduct]?.name,
      price: data[editedProduct]?.price,
      stock: data[editedProduct]?.stock
    })
  }, [data])

  const handleProductName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value.replace(/[^a-zA-Z\s]/g, '');
    setForm({ ...form, name: value})
  }

  const handleProductPrice = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, price: event.target.valueAsNumber})
  }

  const handleProductStock = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, stock: event.target.valueAsNumber})
  }

  const handleEditProduct = () => {
    schema.validate(form)
      .then(() => {
        toast.success(`Data updated successfully!`)
        dispatch(editProduct(form));
        onClose()
      })
      .catch(() => 
        toast.error(`Update data failed!`)
      );
  }
  
  return (    
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
        <div className='flex justify-between items-center mb-4'>
          <div className='font-semibold text-lg text-[#666666]'>
            Edit Data Produk
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
                // value={data[editedProduct]?.name}
                value={form?.name}
                onChange={(e) => handleProductName(e)}
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
                // value={data[editedProduct]?.price}
                value={form?.price}
                onChange={(e) => handleProductPrice(e)}
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
                // value={data[editedProduct]?.stock}
                value={form?.stock}
                onChange={(e) => handleProductStock(e)}
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
              onClick={() => handleEditProduct()}
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

export default ModalEditProduct