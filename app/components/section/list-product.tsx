import React, { useState } from 'react'
import Image from "next/image";
import Box from '@/public/box.png'
import { standartCurrency } from '@/app/hooks/useStandardCurrency';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import ModalConfirmDelete from './modal-confirm-delete';
import { ItemsI } from '@/app/redux/slices/productSlice';

interface ListProductProps {
  data: ItemsI[];
  showModalConfirmDelete: boolean;
  showModalEditProduct: boolean;
  setShowModalConfirmDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModalEditProduct: React.Dispatch<React.SetStateAction<boolean>>;
  setEditedProduct: React.Dispatch<React.SetStateAction<number>>;
}

const ListProduct: React.FC<ListProductProps> = ({
  data,
  showModalConfirmDelete,
  showModalEditProduct,
  setShowModalConfirmDelete,
  setShowModalEditProduct,
  setEditedProduct
}) => {
  const [selectedId, setSelectedId] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const [filteredProduct, setFilteredProduct] = useState(data);

  const filterBySearch = (event: any) => {
      const query = event.target.value;
      var updatedList = [...data];
      updatedList = updatedList.filter((item) => {
          return (
              item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
          );
      });
      setFilteredProduct(updatedList);
  };
  
  return (
    <div className='h-full w-full xl:w-[1280px] flex flex-col justify-center items-center'>
      <div className='w-full my-4'>
        <div className='text-lg font-semibold mb-2'>
          Search Product
        </div>
        <input
          type="text"
          onChange={filterBySearch}
          placeholder="Search product ..."
          className="w-full rounded-lg border border-[#494949] bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>
      {
        filteredProduct?.length === 0 &&
          <div className='w-full xl:w-[1280px] italic h-[300px] flex justify-center items-center'>
            There is not data that you looking for
          </div>
      }
      <div className='h-full w-full xl:w-[1280px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 mb-2 px-2 xl:px-0 md:px-4'>
        {
          filteredProduct?.map((item, index) => {
            return (
              <div
                key={index}
                className='w-full flex flex-col justify-center items-center p-4 shadow-lg rounded-lg hover:shadow-xl duration-300 cursor-pointer bg-white'
              >
                <div className='w-full h-auto flex justify-center items-center rounded-lg overflow-hidden shadow-lg mb-4'>
                  <Image
                      src={Box}
                      className="rounded-xl bg-[#ffffff] hover:bg-[#DCFCE4] duration-500 dark:bg-[#6b6b6b] dark:hover:bg-[#969696] w-full h-auto"
                      width={1000}
                      height={1000}
                      alt="Logo1"
                  />
                </div>
                <div className='w-full flex justify-between'>
                  <div>
                    <div className='text-2xl font-bold'>
                      {item?.name}
                    </div>
                    <div className='text-lg font-semibold'>
                      {standartCurrency(item?.price)}
                    </div>
                    <div className='mt-4'>
                      Stok: {item?.stock} item
                    </div>
                  </div>
                  <div className='flex gap-2 justify-center items-start'>
                    <FaRegEdit 
                      onClick={() => {
                        setShowModalEditProduct(true);
                        setEditedProduct(index)
                      }}
                      className='w-[30px] h-auto text-[#262626] hover:w-[35px] duration-300 cursor-pointer'
                    />
                    <RiDeleteBin6Line
                      onClick={() => {
                        setShowModalConfirmDelete(true);
                        setSelectedId(item?.id)
                      }}
                      className='w-[30px] h-auto text-[#b90000] hover:w-[35px] duration-300 cursor-pointer'
                    />
                  </div>
                  {
                    showModalConfirmDelete &&
                      <ModalConfirmDelete
                        selectedId={selectedId}
                        setShowModalConfirmDelete={setShowModalConfirmDelete}
                      />
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ListProduct