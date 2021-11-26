db.customers.bulkWrite([
    {
        insertOne: {
            document: {
                _id: "muhamad",
                full_name: "Muhamad"
            }
        }
    },
    {
        insertOne: {
            document: {
                _id: "taopik",
                full_name: "Taopik"
            }
        }
    },
    {
        updateMany: {
            filter: {
                _id: {
                    $in: ["muhamad", "taopik"]
                }
            },
            update: {
                $set: {
                    full_name: "Muhamad Taopik"
                }
            }
        }
    }
])
