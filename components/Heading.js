export default ({ children }) => (
  <h2>
    {children}
    <style jsx>
      {`
        h2 {
          font-family: serif;
          margin: 0px;
          border-bottom: 1px solid #d8d8d8;
          text-align: center;
          color: #525251;
        }
      `}
    </style>
  </h2>
)
