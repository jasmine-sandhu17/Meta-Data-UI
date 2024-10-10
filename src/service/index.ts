let fetchData = async (filePath: string) => {
  let res = null      
     await fetch(filePath)
        .then((response) => response.json())
        .then((data) => {
          res = data
        })
        .catch((err) => {
          console.error('Error loading data:', err)
        })
      return res;
    }

  export {fetchData}
  