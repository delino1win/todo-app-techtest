import UsernameForm from "./username-form";

export default function MbSignin() {
  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_10").showModal()}
      >
        Sign In
      </button>
      <dialog id="my_modal_10" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-5">
            Please Identify Yourself
          </h3>
          <div className="flex justify-center w-full">
            
          <UsernameForm />
          </div>
        </div>
      </dialog>
    </div>
  );
}
