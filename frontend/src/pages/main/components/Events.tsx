interface EventProps {
  name: string;
  description: string;
  icon: string;
  platform: string;
  message: string;
}
const events: EventProps[] = [
  {
    name: "Event 1",
    description: "Description 1",
    icon: "https://images.pexels.com/photos/13925674/pexels-photo-13925674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    platform: "Twitter",
    message: "This is a message for event 1",
  },
  {
    name: "Event 2",
    description: "Description 2",
    icon: "https://images.pexels.com/photos/13925674/pexels-photo-13925674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    platform: "Twitter",
    message: "This is a message for event 2",
  },
  {
    name: "Event 3",
    description: "Description 3",
    icon: "https://images.pexels.com/photos/13925674/pexels-photo-13925674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    platform: "Twitter",
    message: "This is a message for event 3",
  },
  {
    name: "Event 4",
    description: "Description 4",
    icon: "https://images.pexels.com/photos/13925674/pexels-photo-13925674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    platform: "Twitter",
    message: "This is a message for event 4",
  },
  {
    name: "Event 5",
    description: "Description 5",
    icon: "https://images.pexels.com/photos/13925674/pexels-photo-13925674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    platform: "Twitter",
    message: "This is a message for event 5",
  },
];

const EventCard = ({ event }: { event: EventProps }) => {
  return (
    <div className="bg-white shadow-sm p-4 rounded-lg mb-4 border">
      <div className="flex items-center space-x-4 mb-2">
        <img
          src={event.icon}
          alt={event.name}
          className="w-8 h-8 rounded-full"
        />
        <h4 className="font-bold text-gray-800">
          {event.name} -
          <span className="font-normal text-gray-600">
            {" "}
            {event.description}
          </span>
        </h4>
      </div>
      <div className="border-t pt-2">
        <p className="text-sm text-gray-600">
          Shouted out <strong>{event.platform}</strong>
        </p>
        <p className="text-gray-700 text-sm mt-1">{event.message}</p>
      </div>
    </div>
  );
};

function Events() {
  return (
    <div className="lg:flex flex-col gap-5 w-1/3 justify-start items-start px-24 hidden">
      <p className="text-2xl text-left w-full py-4 border-b-[1px] border-gray-300">
        Upcoming Events
      </p>
      <div className="flex flex-col gap-5 justify-center items-center">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Events;
