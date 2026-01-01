export function FavoritIcon({ className = "", containerClassName="" }) {
  return (
    <svg
      className={containerClassName}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path
        className={className}
        d="M22.45 6a5.47 5.47 0 0 1 3.91 1.64a5.7 5.7 0 0 1 0 8L16 26.13L5.64 15.64a5.7 5.7 0 0 1 0-8a5.48 5.48 0 0 1 7.82 0l2.54 2.6l2.53-2.58A5.44 5.44 0 0 1 22.45 6m0-2a7.47 7.47 0 0 0-5.34 2.24L16 7.36l-1.11-1.12a7.49 7.49 0 0 0-10.68 0a7.72 7.72 0 0 0 0 10.82L16 29l11.79-11.94a7.72 7.72 0 0 0 0-10.82A7.5 7.5 0 0 0 22.45 4"
      />
    </svg>
  );
}

export function ArrowIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="24"
      viewBox="0 0 12 24"
    >
      <path
        className={className}
        d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
      />
    </svg>
  );
}

export function ProfileIcon({ fill = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        className={`${fill}`}
        fillRule="evenodd"
        d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CartIcon({ fill = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        className={`${fill}`}
        d="M2.787 2.28a.75.75 0 0 1 .932.507l.55 1.863h14.655c1.84 0 3.245 1.717 2.715 3.51l-1.655 5.6c-.352 1.193-1.471 1.99-2.715 1.99H8.113c-1.244 0-2.362-.797-2.715-1.99L2.281 3.212a.75.75 0 0 1 .506-.931M6.25 19.5a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0m8 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"
      />
    </svg>
  );
}

export function LogoutIcon({ fill = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <path
          className={fill}
          d="M12 3a1 1 0 0 1 .117 1.993L12 5H7a1 1 0 0 0-.993.883L6 6v12a1 1 0 0 0 .883.993L7 19h4.5a1 1 0 0 1 .117 1.993L11.5 21H7a3 3 0 0 1-2.995-2.824L4 18V6a3 3 0 0 1 2.824-2.995L7 3zm5.707 5.464l2.828 2.829a1 1 0 0 1 0 1.414l-2.828 2.829a1 1 0 1 1-1.414-1.415L17.414 13H12a1 1 0 1 1 0-2h5.414l-1.121-1.121a1 1 0 0 1 1.414-1.415"
        />
      </g>
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 -0.5 41 41"
    >
      <g fill="none" strokeMiterlimit="10">
        <path
          fill="#ffe236"
          strokeWidth="#231f20"
          d="M38.24 13.84a25.6 25.6 0 0 0-6.13-2a33 33 0 0 0-4.83-.59a29.4 29.4 0 0 0-2-4.11a25.8 25.8 0 0 0-3.75-5.24a2.47 2.47 0 0 0-3.38 0a26.2 26.2 0 0 0-3.75 5.28a35 35 0 0 0-1.94 4.13a29 29 0 0 0-4.56.61a26.2 26.2 0 0 0-6.14 1.95a2.49 2.49 0 0 0-1 3.22a26 26 0 0 0 3.81 5.19a36 36 0 0 0 3.38 3.17A29.3 29.3 0 0 0 7 30.3a26 26 0 0 0 0 6.43a2.48 2.48 0 0 0 2.74 2a26 26 0 0 0 6.11-2a37 37 0 0 0 4-2.22a35 35 0 0 0 4 2.22a26 26 0 0 0 6.11 2a2.48 2.48 0 0 0 2.74-2a26 26 0 0 0 0-6.43a30 30 0 0 0-.86-4.65a28 28 0 0 0 3.63-3.41a26.6 26.6 0 0 0 3.82-5.19a2.47 2.47 0 0 0-1.05-3.21Z"
          stroke-width="1"
        />
        <path
          strokeWidth="#fff"
          strokeLinecap="round"
          d="M21.52 5.84A26 26 0 0 1 24 10.11"
          stroke-width="1"
        />
      </g>
    </svg>
  );
}
