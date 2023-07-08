import {createStyles, Paper, rem, Text, TextInput} from "@mantine/core";
import {useEffect, useState} from "react";

const useStyles = createStyles((theme, { floating }) => ({
    root: {
        position: 'relative',
        width: '200px',
    },

    label: {
        position: 'absolute',
        zIndex: 2,
        top: rem(7),
        left: theme.spacing.sm,
        pointerEvents: 'none',
        color: floating
            ? theme.colorScheme === 'dark'
                ? theme.white
                : theme.black
            : theme.colorScheme === 'dark'
                ? theme.colors.dark[3]
                : theme.colors.gray[5],
        transition: 'transform 150ms ease, color 150ms ease, font-size 150ms ease',
        transform: floating ? `translate(-${theme.spacing.sm}, ${rem(-28)})` : 'none',
        fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
        fontWeight: floating ? 500 : 400,
    },

    required: {
        transition: 'opacity 150ms ease',
        opacity: floating ? 1 : 0,
    },

    input: {
        '&::placeholder': {
            transition: 'color 150ms ease',
            color: !floating ? 'transparent' : undefined,
        },
    },

    comment: {
        padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
        marginTop: '20px',
    },
}));

export const Quest2 = () => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');
    const { classes } = useStyles({ floating: value.trim().length !== 0 || focused });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (value === '19') {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [value])


    return (
        <div>
            <TextInput
                label="Your answer"
                placeholder="Answer"
                required
                classNames={classes}
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                mt="md"
                autoComplete="nope"
            />
            {isVisible &&
                <Paper withBorder radius="md" className={classes.comment}>
                    <Text>
                        Поздравляю, ты нашла второй ответ! Вот тебе еще одна загадка:
                    </Text>
                    <Text>В преградах времени и пространства мы волочились, неся внутри священный шар, ибо в его бездонной глубине скрыт ореол загадки, ожидающий своего освобождения. Волшебство мерцало в недрах этого сферического святилища, пронизывая каждый его капризный вздох. Искорки мудрости сливались с блеском капибар, элегантно танцующих в виртуальных водоворотах. Вращаясь в руках, он вдохновлял нас искусно ловить каждый мгновенье жизни, словно бабочек, заточенных в стеклянные клетки. О, сакральный шар, утвержденный временем, в тебе притаилась тайна нашей судьбы! Лишь одно нежное касание, одна мгновенная вспышка, и ответ раскроется, словно крылья капибары в ночном лесу. Мы на пути осознания, где разорванный шар является ключом к преисполненной мудрости и стражником глубин, в которых пробуждается дремлющая истина.</Text>
                </Paper>
            }
        </div>
    );
}