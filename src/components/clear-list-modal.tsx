interface ClearListModalProps {
    closeConfirmClearModal: () => void
    clearList: () => void
}

export function ClearListModal({ closeConfirmClearModal, clearList }: ClearListModalProps) {
    return (
        <div className="fixed w-full h-screen bg-[rgba(0,0,0,.5)] flex items-center justify-center gap-4 text-center">
          <div className="bg-orange-950 rounded-xl p-12 font-semibold space-y-4">
            <p className="text-xl text-amber-200">WARNING!</p>
            <p className="text-xl text-amber-200">You're going to delete<br />all items from the list!</p>
            <div className="flex gap-2 items-center justify-center">
              <button onClick={closeConfirmClearModal} type="button" className="outline-none h-11 py-2 px-4 rounded-full bg-amber-200">Cancel</button>
              <button onClick={clearList} type="button" className="outline-none h-11 py-2 px-4 rounded-full bg-green-300">Confirm</button>
            </div>
          </div>
        </div>
    )
}