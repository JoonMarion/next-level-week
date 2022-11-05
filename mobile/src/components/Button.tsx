import { Button as ButtonNativeBase, Text, IButtonProps } from 'native-base';

interface Props extends IButtonProps {
    title: string;
    type?: 'PRIMARY' | 'SECONDARY';
}

export function Button({ title, ...rest }: Props) {
    return (
        <ButtonNativeBase
            w="full"
            h={14}
            rounded="md"
            fontSize="md"
            textTransform="uppercase"
            bg={rest.type === 'SECONDARY' ? 'red.500' : 'yellow.500'}
            {...rest}
        >
            <Text>{title}</Text>
        </ButtonNativeBase>
    );
}
