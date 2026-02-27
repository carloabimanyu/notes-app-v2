import { Affix, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconPencilPlus } from '@tabler/icons-react';

function AddNoteButton() {
    const theme = useMantineTheme();

    return (
        <Affix position={{ bottom: 20, right: 20 }}>
            <ActionIcon
                size="xl"
                radius="md"
                variant="filled"
                color="black"
                onClick={() => console.log('Clicked')}
            >
                <IconPencilPlus size={20} />
            </ActionIcon>
        </Affix>
    );
}

export default AddNoteButton;