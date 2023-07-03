import React from "react";

const ConfrimationModal = (props) => {
  const { title, handleCancel, handleConfirm } = props;
  return (
    <div className="tracking-wider overflow-hidden absolute z-50 top-0 items-center flex justify-center left-0 w-full h-screen bg-modal">
      <div class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-select rounded-lg shadow-xl rtl:text-right  sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
        <div>
          <div class="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-9 h-9 text-color "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
          </div>

          <div class="mt-2 text-center">
            <h3
              class=" font-medium leading-6 text-color capitalize "
              id="modal-title"
            >
              Delete {title}
            </h3>
            <p class="mt-1 text-sm text-gray-500 ">
              Are you sure? {title} will be remove.
            </p>
          </div>
        </div>

        {/* buttons */}
        {/* <div class="mt-5 sm:flex sm:items-center justify-end"> */}
        <div class="flex mt-5 sm:flex-row flex-col sm:items-center gap-3 ">
          <button
            onClick={handleCancel}
            type="button"
            className="border border-color w-full justify-center text-sm flex items-center gap-1 cursor-pointer tracking-wider p-2 sm:px-4 rounded text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleConfirm}
            type="button"
            className="bg-button border border-color w-full justify-center text-sm flex items-center gap-1 cursor-pointer tracking-wider p-2 sm:px-4 rounded text-white"
          >
            Delete
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ConfrimationModal;
