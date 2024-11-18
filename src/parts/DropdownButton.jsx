function DropdownButton({ children, open, toggle }) {
  return <>
    <button onClick={toggle}>
      {children}
    </button>
  </>
}

export default DropdownButton;
