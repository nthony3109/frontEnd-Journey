const TnxCard = ({type, amount,description, date}) => {

    const isCredit = type === "credit"

    return (
        <div>
            //tenary styling is cool
            <div className={`p-4 mb-3 pl-5  ml-10   rounded-lg bg-grey-50 border-l-4 ${isCredit ? "border-green-500" : "border-red-500"}`}>
                <h1> Transaction card</h1>
                <p  className="text-gray-600 text-sm mt-1"> Transaction Type : {type} </p>
                <p  className="text-gray-600 text-sm mt-1"> Amount : NGN{amount.toLocaleString()} </p>
                <p  className="text-gray-600 text-sm mt-1"> Description : {description} </p>
                <p  className="text-gray-600 text-sm mt-1"> Date : {date} </p>
            </div>

        </div>
    )
}

export default TnxCard