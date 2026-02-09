function CounterButtons({ action, content }) {
  return <button className=" bg-blue-950 text-white m-2 px-4 py-2 rounded font-semibold" onClick={action}>{content}</button>

}

export default CounterButtons;
