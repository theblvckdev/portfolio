const ButtonWidget = ({ title, outline }) => {
  return (
    <>
      <button className={outline ? "py-3 px-5 rounded-full ring-1 ring-indigo-500 shadow bg-transparent hover:bg-indigo-500 duration-300 ease-in text-indigo-500 hover:text-white" : "py-3 px-5 rounded-full shadow bg-indigo-500 ring-1 ring-indigo-500 hover:bg-indigo-600 duration-300 ease-in text-white"}>
        {title}
      </button>
    </>
  )
}

export default ButtonWidget