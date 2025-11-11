import { StatusBar } from "expo-status-bar";
import { View, Image } from "react-native";
import { styles } from "./styles"
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";

export function Home() {
    return (
        <View style={styles.container}>
            <Image source={require("@/assets/logo.png")} style={styles.logo} />
            <StatusBar style="auto" />
            <View style={styles.form}>
                <Input placeholder="Oque você precisa comprar?" />
                <Button title={"Entrar"} />
            </View>
            <View style={styles.content}>
                <Filter status={FilterStatus.DONE} isActive />
                <Filter status={FilterStatus.PEDING} isActive={false} />
            </View>
        </View>
    );
}
