const CardComponent = ({ cardItem, handleDelete, handleEdit }) => {
  const { id, title, body } = cardItem;

  return (
    <div className='border-2 border-black p-5 flex flex-col justify-center'>
      <h2 className=' mb-4'>
        UserId : <span className='text-2xl font-bold'>{id}</span>
      </h2>
      <h2 className='mb-4 font-bold'>
        Title : <span className='text-xl font-normal'>{title}</span>
      </h2>
      <h2 className='mb-4 font-bold'>
        Message : <span className='text-xl font-normal'>{body}</span>
      </h2>
      <div className='bottom-0 mt-auto'>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
          onClick={() => handleEdit(cardItem)}
        >
          Edit
        </button>
        <button
          className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 ml-2'
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
