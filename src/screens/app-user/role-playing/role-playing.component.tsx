import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { useStyles } from "./role-playing.styles.ts";
import { ThemeNamesList } from "shared/constants";
import PlayerCard from "screens/app-user/role-playing/components/player-card";
import { Box } from "ui-kit/box";
import { useTimer } from "hooks/timer/useTimer.ts";
import { useStopwatch } from "hooks/timer/useStopwatch.ts";

const RolePlayingComponent = (props: any) => {
  const styles = useStyles();
  const { reset, totalSeconds, pause } = useStopwatch({ autoStart: false });

  console.log(totalSeconds);

  const { allThemeChecked, selectedLocations, selectedTheme, userList } = props.route.params;
  const [playersList, setPlayersList] = useState([]);
  const [startFirstRound, setStartFirstRound] = useState(false);
  const [theme, setSelectedTheme] = useState("");
  const [location, setSelectedLocation] = useState("");
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [askList, setAskList] = useState([]);
  const [discussionRound, setDiscussionRound] = useState(false);
  const [secondRound, setSecondRound] = useState(false);

  useEffect(() => {
    buildPlayers();
  }, []);

  const buildPlayers = () => {
    let themeNew;
    let locationNew;
    if (allThemeChecked) {
      let themeObj = ThemeNamesList[Math.floor(Math.random() * ThemeNamesList.length)];
      themeNew = themeObj.name;
      // @ts-ignore
      locationNew = (themeObj?.locationList ?? ["k"])[Math.floor(Math.random() * (themeObj?.locationList ?? []).length)];
    }
    setSelectedTheme(themeNew);
    setSelectedLocation(locationNew);
    let players = [...userList];
    let numSpies = 0;

    if (players.length >= 4 && players.length <= 6) {
      numSpies = 1;
    } else if (players.length > 6 && players.length <= 10) {
      numSpies = 2;
    }
    const shuffledPlayers = players.map(player => ({ userName: player, spy: false }))
      .sort(() => Math.random() - 0.5);
    const spyIndices: any = [];
    while (spyIndices.length < numSpies) {
      const randomIndex = Math.floor(Math.random() * shuffledPlayers.length);
      if (!spyIndices.includes(randomIndex)) {
        spyIndices.push(randomIndex);
      }
    }
    spyIndices.forEach((index: number) => {
      shuffledPlayers[index].spy = true;
    });
    setPlayersList(shuffledPlayers);
  };

  const nextPlayer = () => {
    if (currentPlayerIndex < playersList.length - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
    } else {
      setStartFirstRound(true);
      setCurrentPlayerIndex(0);
      generateQuestionOrder();
    }
  };

  const nextPlayerAsk = () => {
    if (currentPlayerIndex < playersList.length - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
    } else {
      setDiscussionRound(true);
    }
  };

  // Функція для випадкового перемішування масиву
  function shuffleArray(array) {
    const shuffledArray = array.slice(); // Копіюємо масив, щоб не змінювати оригінал
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Обмінюємо елементи місцями
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

// Функція для створення масиву текстових рядків
  function generateQuestionOrder() {
    const shuffledPlayers = shuffleArray(playersList);

    const result = shuffledPlayers.map((player, index) => {
      const nextPlayer = shuffledPlayers[(index + 1) % shuffledPlayers.length];
      return `${player.userName} задає питання ${nextPlayer.userName}`;
    });
    setAskList(result);
  }


  return (
    <SafeAreaView style={styles.container}>
      {playersList.length > 0 && !startFirstRound && !discussionRound && !secondRound &&
        <>
          <PlayerCard
            selectedTheme={theme}
            selectedLocation={location}
            nextPlayer={nextPlayer}
            player={playersList[currentPlayerIndex]}
          />
        </>
      }
      {startFirstRound && !discussionRound && !secondRound &&
        <Box pl={16} pr={16} pt={16}>
          <Box alignItems={"center"}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Раунд 1</Text>
          </Box>
          <Box alignItems={"center"} pt={10} pb={200}>
            <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>Потрібно задати добре продумане
              питання для того щоб зрозуміти хто шпигун</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>Коли шпигун відповідає не можна
              іншим учасникам гри обговорювати його відповідь. Для цього є раунд обговорення</Text>
          </Box>
          <Text style={styles.askText}>{askList[currentPlayerIndex]}</Text>
          <Box pt={26}>
            <Button
              title={currentPlayerIndex !== askList.length - 1 ? "Наступне запитання" : "Почати раунд обговорення"}
              onPress={nextPlayerAsk} />
          </Box>
        </Box>
      }
      {discussionRound &&
        <Box pl={16} pr={16} pt={16}>
          <Text style={styles.askText}>Раунд обговорення</Text>
          <Text style={styles.askText}>У вас є 1 хв для того щоб обговорити хто є шпигуном</Text>
          <Box pt={40} alignItems={"center"}>
            <Text style={{ fontSize: 32, fontWeight: "bold" }}>{totalSeconds > 60 ? 0 : 60 - totalSeconds}</Text>
          </Box>
          <Box pt={26}>
            {totalSeconds === 0 &&
              <Button
                title={"Почати обговорення"}
                onPress={reset} />
            }
            {totalSeconds > 60 &&
              <Button
                title={"Почати другий раунд"}
                onPress={() => {
                  pause();
                  setSecondRound(true);
                  setDiscussionRound(false);
                }} />
            }
          </Box>
        </Box>
      }
      {secondRound &&
        <Box pt={50}>
          <Box alignItems={"center"}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Раунд 2</Text>
          </Box>
          <Box alignItems={"center"} pt={10} pb={200} pr={16} pl={16}>
            <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>В цьому раунді ви задаєте одне
              питання по колу в довільному порядку</Text>
          </Box>
          <Box pt={26}>
            <Button
              title={"Почати раунд обговорення"}
              onPress={nextPlayerAsk} />
            <Button
              title={"Почати голосування"}
              onPress={nextPlayerAsk} />
          </Box>
        </Box>
      }
    </SafeAreaView>
  );
};

export default RolePlayingComponent;
