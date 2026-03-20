interface Props {
    text: string;
}
export const CustomBtn = ({ text }: Props) => {
    return <button>{text}</button>;
};
