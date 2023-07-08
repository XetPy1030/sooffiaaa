import {createStyles, rem, TextInput, Title, Text, Button, Image} from "@mantine/core";
import React from "react";
import image from '../img.png';

const useStyles = createStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: `calc(${theme.spacing.xl} * 2)`,
        borderRadius: theme.radius.md,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        border: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
        }`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column-reverse',
            padding: theme.spacing.xl,
        },
    },

    image: {
        maxWidth: '40%',

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
        },
    },

    body: {
        paddingRight: `calc(${theme.spacing.xl} * 4)`,

        [theme.fn.smallerThan('sm')]: {
            paddingRight: 0,
            marginTop: theme.spacing.xl,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1,
        marginBottom: theme.spacing.md,
    },

    controls: {
        display: 'flex',
        marginTop: theme.spacing.xl,
    },

    inputWrapper: {
        width: '100%',
        flex: '1',
    },

    input: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: 0,
    },

    control: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
}));

export const Mnogo = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.body}>
                <Title className={classes.title}>Что-то непонятное...</Title>
                <Text>
                    На этом этапе мы попробуем сделать что-то непонятное. Но это не точно. Возможно, это будет что-то понятное. Но это не точно.
                    Мне кажется, что это будет что-то непонятное. Но это не точно. Возможно, это будет что-то понятное. Но это не точно.
                </Text>


            </div>
            <Image src={image} className={classes.image} />
        </div>
    )
}