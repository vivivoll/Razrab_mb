import { FlatList, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import { Link } from "expo-router";
import { useNotes } from "./use_hooks"; //испорт хуков

export default function Index() {

  //хук-функция создания новой заметки
  const { notes, createNote } = useNotes();

  return (
    <View style={styles.container}>
      <FlatList 
        data={notes} //список заметок которые получвкт из хука
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <Link href={`/note/${item.item.id}`} style={styles.noteItem}>
            <Text numberOfLines={1} style={styles.noteText}>
              {item.item.text || "Новая заметка"}
            </Text>
          </Link>
        )}
      />
      {/*функция, которая создает заметку*/}
      <TouchableOpacity onPress={createNote} style={styles.addBtn}>
        <Entypo name="add-to-list" size={24} color="black" style={styles.addBtnText}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  noteItem: {
    padding: 15,
    backgroundColor: "#eee",
    borderRadius: 8,
    marginBottom: 10,
  },

  noteText: { fontSize: 16 },

  addBtn: {
    position: "absolute",
    right: 20,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#4CAF50",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },

  addBtnText: {
    color: "#fff",
    fontSize: 32,
    lineHeight: 32,
  },
});


