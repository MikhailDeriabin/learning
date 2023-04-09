import {Button, FlatList, Image, StyleSheet, View} from 'react-native';
import {useState} from "react";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
    const [goals, setGoals] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal() {
        setIsModalOpen(true);
    }
    function closeModal() {
        setIsModalOpen(false);
    }

    function addNewGoal(goal) {
        setGoals((prev) => {
            return [...prev, goal];
        });
    }

    function deleteGoal(id) {
        setGoals((prev) => prev.filter(goal => goal.id !== id));
    }

    return (
        <View style={styles.appContainer}>
            <Image source={require('./assets/images/goalIcon.png')} style={styles.image}/>
            <View style={styles.addGoalButtonWrapper}>
                <Button title='add new goal' onPress={openModal}/>
            </View>

            <GoalInput isVisible={isModalOpen} addNewGoal={addNewGoal} closeModal={closeModal}/>

            <View style={styles.goalsList}>
                <FlatList
                    keyExtractor={ (item) => item.id }
                    data={goals}
                    renderItem={ goalData => {
                        return (
                            <GoalItem
                                id={goalData.item.id}
                                text={goalData.item.text}
                                deleteGoal={deleteGoal}
                            />
                        );
                    } }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: 'black'
    },

    image: {
        width: 100,
        height: 100
    },

    addGoalButtonWrapper: {
        marginBottom: 15
    },

    goalsList: {
        flex: 5
    }
});
