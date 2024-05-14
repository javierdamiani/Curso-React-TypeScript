import { useState } from "react";
import type { MouseEventHandler } from "react";
import { random } from "lodash";
import { LazyImage } from "@/components/RandomFox";

const myRandom = () => random(1, 123);

// generate simple unique id
const generateId = (): string => Math.random().toString(36).substring(2, 9);

type ImageItem = { id: string; url: string };

export default function Home() {
	const [images, setImages] = useState<Array<IFoxImageItem>>([]);

	const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
		const newImageItem: IFoxImageItem = {
			id: generateId(),
			url: `https://randomfox.ca/images/${myRandom()}.jpg`,
		};

		setImages([...images, newImageItem]);
	};

	return (
		<main>
			<h1>Hello, Platzi</h1>
			<button onClick={addNewFox}>Add new fox</button>
			{images.map(({ id, url }) => (
				<div
					key={id}
					className="p-4"
				>
					<LazyImage
						src={url}
						onClick={() => console.log("Hey")}
						className="rounded-lg bg-gray-300"
						width={320}
						height="auto"
					/>
				</div>
			))}
		</main>
	);
}
