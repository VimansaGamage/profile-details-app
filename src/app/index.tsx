import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  const profile = {
    name: "Vimansa Gamage",
    email: "vimansagamage2003@gmail.com",
    points: 0,
  };

  const handleAdd = () => {
    Alert.alert("Add", "Add button pressed.");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Avatar with green check */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            <Image
              source={require("../../assets/images/profile.jpg")}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.check}>✔</Text>
        </View>

        <View style={styles.divider} />

        {/* Name */}
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{profile.name}</Text>

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <View style={styles.row}>
          <Text style={styles.icon}>✉</Text>
          <Text style={styles.value}>{profile.email}</Text>
        </View>

        {/* Points */}
        <Text style={styles.label}>Points</Text>
        <View style={styles.row}>
          <Text style={styles.icon}>★</Text>
          <Text style={styles.value}>{profile.points}</Text>
        </View>
      </ScrollView>

      {/* Floating action button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={handleAdd}
        accessibilityLabel="Add"
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  header: {
    backgroundColor: "#000000",
    paddingTop: 45,
    paddingBottom: 14,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 100,
  },
  avatarWrapper: {
    alignSelf: "center",
    marginBottom: 12,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#F3B6C2",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  check: {
    position: "absolute",
    right: -2,
    bottom: 2,
    fontSize: 25,
    fontWeight: "bold",
    color: "#00E600",
  },
  divider: {
    height: 1.5,
    backgroundColor: "#000000",
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 6,
  },
  value: {
    fontSize: 14,
    color: "#222222",
    marginBottom: 15,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  icon: {
    fontSize: 16,
    color: "#000000",
    width: 20,
    textAlign: "center",
    marginRight: 5,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },
  fabText: {
    color: "#FFFFFF",
    fontSize: 28,
    lineHeight: 30,
  },
});
