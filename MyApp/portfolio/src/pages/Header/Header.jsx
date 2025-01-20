import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <ul style={{ listStyle: "none", display: "flex", justifyContent: 'space-between' }}>
        <li>
          <Link to={"/"}>Trang chu</Link>
        </li>
        <li>
          <Link to={"/sanpham"}>Sản phẩm</Link>
        </li>
        <li>
          <Link to={"/gioithieu"}>Giới thiệu</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header