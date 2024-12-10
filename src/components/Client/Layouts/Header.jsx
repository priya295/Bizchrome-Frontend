import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCategoryAlt, BiSearch } from "react-icons/bi";
import axiosInstance from "../../../axiosInstance";
import BizChromeLogo from "../../../assets/bizchromelogo.gif";
import { FaUserAlt , FaEnvelope } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [hoveredCategoryId, setHoveredCategoryId] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchedCategory, setSearchedCategory] = useState(null);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/category/categories");
        setCategories(response.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const fetchSubcategories = async (categoryId) => {
    try {
      const response = await axiosInstance.get(
        `/subcategory/subcategories/category/${categoryId}`
      );
      setSubcategories(response.data || []);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  const handleMouseEnter = (categoryId) => {
    setHoveredCategoryId(categoryId);
    fetchSubcategories(categoryId);
  };

  const handleMouseLeave = () => {
    setHoveredCategoryId(null);
    setSubcategories([]);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    handleSearchCategory();
  };

  const handleEditProfile = () => {
    const userId = localStorage.getItem("userId");
    navigate(`/UserEdit/${userId}`);
    setIsProfileDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = async (e) => {
    if (e.key === "Enter" && searchInput.trim() !== "") {
      try {
        const response = await axiosInstance.get(
          `/category/category/name/${searchInput}`
        );
        const category = response.data;
        if (category && category._id) {
          navigate(`/CategoryData/${category._id}`);
        } else {
          alert("Category not found");
        }
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    }
  };

  const handleSearchCategory = async () => {
    if (searchInput.trim() !== "") {
      try {
        const response = await axiosInstance.get(
          `/category/categories?query=${searchInput}`
        );
        setSearchedCategory(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchedCategory(null);
    }
  };

  return (
    <header className="p-4 shadow-lg bg-white relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={BizChromeLogo}
            alt="BizChrome Logo"
            className="h-12 w-auto transition-transform hover:scale-110"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          {/* Categories */}
          <div className="relative">
            <button className="flex items-center space-x-2 text-gray-800 font-medium hover:text-blue-500">
              <BiCategoryAlt className="text-2xl" />
              <span>Categories</span>
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg w-60 max-h-60 overflow-y-auto">
              <ul>
                {categories.map((category) => (
                  <li
                    key={category._id}
                    onMouseEnter={() => handleMouseEnter(category._id)}
                    onMouseLeave={handleMouseLeave}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Subcategories */}
          {hoveredCategoryId && subcategories.length > 0 && (
            <div className="absolute bg-white shadow-lg rounded-lg top-16 left-60 w-64 max-h-60 overflow-y-auto z-50">
              <ul>
                {subcategories.map((subcategory) => (
                  <li key={subcategory._id} className="px-4 py-2 hover:bg-gray-100">
                    {subcategory.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              className="border border-gray-300 rounded-full px-4 py-2 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
              value={searchInput}
              onChange={handleSearchInputChange}
              onKeyDown={handleSearch}
            />
            <BiSearch className="absolute left-3 top-3 text-gray-500" />
            {searchedCategory && (
              <div className="absolute top-12 bg-white shadow-lg rounded-md w-full max-h-60 overflow-y-auto z-50">
                {searchedCategory.map((category) => (
                  <div
                    key={category._id}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate(`/CategoryData/${category._id}`)}
                  >
                    {category.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
        <button>
          <FaEnvelope className="text-white text-[40px] bg-gray-800 p-2 rounded-full"/>
          </button>
        <div className="relative">
          <button
            className="flex items-center space-x-2 focus:outline-none"
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          >
            <FaUserAlt className="text-white text-[40px] bg-gray-800 p-2 rounded-full" />
          </button>
          {isProfileDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md w-44 z-50">
              <ul>
                <li>
                  <button
                    onClick={handleEditProfile}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex flex-wrap items-center gap-2"
                  > <FaUserAlt />
                    Edit Profile
                  </button>
                </li>
                <li> 
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex flex-wrap items-center gap-2"
                  > <MdLogout className="mt-[2px] text-[20px]"/>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
