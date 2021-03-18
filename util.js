const handleDelete = async (_id) => {
      try {
        let response = await fetch(mainUrl + _id, {
          method: 'DELETE',
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxZjMxNTg5YzI2ZjAwMTU3ZjljMmMiLCJpYXQiOjE2MTU5ODMzODIsImV4cCI6MTYxNzE5Mjk4Mn0.imIEHolN9xmsiBnjzmaIW3trD3kNRO__6EX26FrJ6bU"
          }
        })
        if (response.ok) {
          alert("item deleted")
          window.location.assign("backoffice.html")
        } else {
          alert("something went wrong. (Contact your dev)")
        }
      } catch (error) {
        console.log(error)
      }
    }