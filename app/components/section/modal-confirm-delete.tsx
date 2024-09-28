import { deleteProduct } from '@/app/redux/slices/productSlice';
import React from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

interface ModalProps {
  selectedId: string;
  setShowModalConfirmDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalConfirmDelete: React.FC<ModalProps> = ({
  selectedId,
  setShowModalConfirmDelete
}) => {
  const dispatch = useDispatch()

  const handleDeleteProduct = (id: string) => {
    dispatch(deleteProduct(id));
    toast.success(`Data deleted successfully!`)
    setShowModalConfirmDelete(false)
  }

  console.log('selectedid', selectedId)
  
  return (    
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
        <div className='flex justify-between items-center mb-4'>
          <div className='font-semibold text-lg text-[#666666]'>
            Apa anda yakin untuk menghapus produk?
          </div>
        </div>
        <hr/>
        <div className='flex justify-between items-center mt-8'>
          <div
            onClick={() => setShowModalConfirmDelete(false)}
            className='py-2 px-4 border-2 border-[#a5a5a5] rounded-lg cursor-pointer hover:bg-gray-400 duration-300'
          >
            Batalkan
          </div>
          <div
            onClick={() => handleDeleteProduct(selectedId)}
            className='py-2 px-4 border-2 bg-[#a30000] rounded-lg cursor-pointer hover:bg-[#da0000] duration-300 text-white'
          >
            Hapus
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalConfirmDelete