"use client"

import { useState } from "react"
import Image from "next/image"

type Props = {
  name: string
  bio: string
  intro: string
  avatar: string
  isFollowed: boolean
  onToggle: () => void
  darkMode: boolean
}

export default function ProfileCard({
  name,
  bio,
  intro,
  avatar,
  isFollowed,
  onToggle,
  darkMode,
}: Props) {

  // FLIP STATE
  const [flip, setFlip] = useState(false)

  return (

    <div
      className="flip-card"
      onClick={() => setFlip(!flip)}
    >

      {/* FRONT SIDE */}

      {!flip ? (

        <div
          className={`profile-card ${darkMode ? "dark" : ""}`}
        >

          <Image
            src={avatar}
            alt={name}
            width={100}
            height={100}
            className="avatar"
          />

          <h2>{name}</h2>

          <p>{bio}</p>

          {/* FOLLOW BUTTON */}

          <button
            onClick={(e) => {
              e.stopPropagation()
              onToggle()
            }}
          >
            {isFollowed ? "Unfollow" : "Follow"}
          </button>

        </div>

      ) : (

        /* BACK SIDE */

        <div
          className={`profile-card back ${darkMode ? "dark" : ""}`}
        >

          <h2>About User</h2>

          <p className="intro-text">
            {intro}
          </p>

        </div>

      )}

    </div>
  )
}