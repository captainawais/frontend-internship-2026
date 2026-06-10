"use client"

import { useState } from "react"

import ProfileCard from "../components/ProfileCard"
import ThemeToggle from "../components/ThemeToggle"
import SearchBar from "../components/SearchBar"

import { users as usersData } from "../data/users"

import "../styles/profile.css"

export default function Page() {

  /* DARK MODE */

  const [darkMode, setDarkMode] = useState(false)

  /* SEARCH */

  const [search, setSearch] = useState("")

  /* USERS */

  const [users, setUsers] = useState(usersData)

  /* FOLLOW */

  const toggleFollow = (id: number) => {

    const updatedUsers = users.map((user) =>

      user.id === id
        ? {
            ...user,
            isFollowed: !user.isFollowed
          }
        : user

    )

    setUsers(updatedUsers)
  }

  /* SEARCH FILTER */

  const filteredUsers = users.filter((user) =>

    user.name
      .toLowerCase()
      .includes(search.toLowerCase())

  )

  return (

    <section
      className={`
        profile-section
        ${darkMode ? "dark-container" : ""}
      `}
    >

      {/* BACKGROUND */}

      <div className="bg-overlay"></div>

      {/* CONTAINER */}

      <div className="profile-container">

        {/* HEADER */}

        <div className="top-bar">

          <div>

            <h1 className="main-title">
              Dynamic Profile Cards
            </h1>

            <p className="sub-title">
              React Props & State Learning Project
            </p>

          </div>

          {/* DARK MODE */}

          <ThemeToggle
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

        </div>

        {/* SEARCH */}

        <div className="search-wrapper">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

        </div>

        {/* CARDS */}

        <div className="cards-grid">

          {filteredUsers.map((user) => (

            <div
              key={user.id}
              className="card-wrapper"
            >

              {/* GLOW */}

              <div className="card-glow"></div>

              {/* PROFILE CARD */}

              <ProfileCard
                name={user.name}
                bio={user.bio}
                intro={user.intro}
                avatar={user.avatar}
                isFollowed={user.isFollowed}
                onToggle={() => toggleFollow(user.id)}
                darkMode={darkMode}
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}