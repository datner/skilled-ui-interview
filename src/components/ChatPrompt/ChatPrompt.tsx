import React, {
	useState,
	useCallback,
	ChangeEventHandler,
	KeyboardEventHandler,
} from "react";
import { ReactComponent as Close } from "../../assets/svg/exit.svg";

export interface ChatPromptProps {
	img: string;
	name: string;
	job: string;
	message: string;
	onReply(msg: string): void;
	onClose(): void;
}

export function ChatPrompt(props: ChatPromptProps) {
	const { onReply, img, message, name, job, onClose } = props;
	const [msg, setMsg] = useState("");

	const handleReply = useCallback(() => {
		onReply(msg);
		setMsg("");
	}, [msg, onReply]);

	const handleKeyUp = useCallback<KeyboardEventHandler<HTMLInputElement>>(
		(e) => {
			if (e.key === "Enter") {
				handleReply();
			}
		},
		[handleReply]
	);

	const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
		(e) => {
			setMsg(e.currentTarget.value);
		},
		[]
	);

	return (
		<div className="relative pb-16 overflow-hidden rounded-xl w-96 bg-blue">
			<button
				onClick={onClose}
				className="absolute top-0 right-0 inline-flex items-center content-center p-2 mt-3 mr-6 bg-transparent rounded-full hover:bg-gray-600"
			>
				<Close />
			</button>
			<div className="px-4 mt-1">
				<div className="flex items-center pl-4 mt-2">
					<img
						className="w-12 h-12 rounded-full"
						src={img}
						alt={`Avatar of ${name}`}
					/>
					<div className="pl-4 mt-1 text-sm">
						<p className="h-5 mb-0 text-lg font-medium leading-none tracking-wider text-white">
							{name}
						</p>
						<p className="h-5 mt-1 font-light text-gray-400">{job}</p>
					</div>
				</div>
				<div className="px-4 ">
					<p className="mt-0 font-light text-white">{message}</p>
				</div>
			</div>
			<div className="absolute bottom-0 flex justify-center w-full h-16 px-8 mt-3 align-middle bg-white border-b-2 border-white">
				<input
					className="block w-full leading-normal bg-white appearance-none ml- focus:outline-none"
					type="text"
					placeholder="Type your message..."
					onChange={handleChange}
					value={msg}
					onKeyUp={handleKeyUp}
				></input>
				<button
					onClick={handleReply}
					className="px-4 my-3 font-semibold leading-none bg-transparent rounded text-blue hover:bg-blue hover:text-white hover:border-transparent"
				>
					Send
				</button>
			</div>
		</div>
	);
}
