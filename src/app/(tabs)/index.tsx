import {  View, FlatList } from "react-native";
import PostListItems from "../../components/postListItems";
import posts from "../../../assets/data/posts.json";

export default function HomeScreen() {
  

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItems post={item} />}
        keyExtractor={(item) => item.id}
        />
    </View>
    
  );
}


