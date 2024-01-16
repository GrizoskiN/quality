const Popup = ({ isOpen, onClose }) => {
    return (
      <div
        className={`${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } fixed top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-300`}
      >
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold mb-2">Form Submitted Successfully!</h2>
          <p>Your custom success message or additional information can go here.</p>
          <button
            onClick={onClose}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default Popup;