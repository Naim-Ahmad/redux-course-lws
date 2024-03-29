import { useDispatch, useSelector } from "react-redux"
import frame from "../../img/icons/Frame.svg"
import vector from "../../img/icons/Vector (1).svg"
import vector3 from "../../img/icons/Vector (3).svg"
import { storeData } from '../../redux/inputData/actions'

export default function InputData() {

  const dispatch = useDispatch()
  const inputData = useSelector(state => state.inputData)
  console.log(inputData)

  const handleSubmit = e => {
    e.preventDefault()
    const from = e.target.from.value;
    const to = e.target.to.value;
    const date = e.target.date.value;
    const guests = e.target.guests.value;
    const ticketClass = e.target.ticketClass.value;

    const bookingInfo = {
      from,
      to,
      date,
      guests,
      ticketClass
    }

    // console.log(bookingInfo)
    dispatch(storeData(bookingInfo))

  }

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form onSubmit={handleSubmit} className="first-hero lws-inputform">
          {/* <!-- From --> */}
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src={frame} alt="" />
              <select className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                <option value="" hidden>Please Select</option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- To --> */}
          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src={frame} alt="" />
              <select className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
                <option value="" hidden>Please Select</option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- Date --> */}
          <div className="des-from">
            <p>Journey Date</p>
            <input type="date" className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
          </div>

          {/* <!-- Guests --> */}
          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src={vector} alt="" />
              <select className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                <option value="" hidden>Please Select</option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          {/* <!-- Class --> */}
          <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src={vector3} alt="" />
              <select className="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" required>
                <option value="" hidden>Please Select</option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button disabled={inputData.length === 3} className="addCity" type="submit" id="lws-addCity">
            <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  )
}