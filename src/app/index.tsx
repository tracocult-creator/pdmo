import React, { useMemo, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const teams = [
  'Africa do Sul',
  'Alemanha',
  'Argelia',
  'Argentina',
  'Australia',
  'Austria',
  'Belgica',
  'Bosnia e Herzegovina',
  'Brasil',
  'Cabo Verde',
  'Canada',
  'Colombia',
  'Coreia do Sul',
  'Costa do Marfim',
  'Croacia',
  'Curacao',
  'Egito',
  'Equador',
  'Escocia',
  'Espanha',
  'Estados Unidos',
  'Franca',
  'Gana',
  'Haiti',
  'Inglaterra',
  'Ira',
  'Iraque',
  'Japao',
  'Jordania',
  'Marrocos',
  'Mexico',
  'Noruega',
  'Nova Zelandia',
  'Paises Baixos',
  'Panama',
  'Paraguai',
  'Portugal',
  'Qatar',
  'Republica Democratica do Congo',
  'Republica Tcheca',
  'Saudi Arabia',
  'Senegal',
  'Suecia',
  'Suica',
  'Tunisia',
  'Turquia',
  'Uruguai',
  'Uzbequistao',
];

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [winner, setWinner] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel = useMemo(
    () => winner || 'Selecione uma selecao',
    [winner],
  );

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.gradientBase} />
      <View style={styles.gradientLight} />
      <View style={styles.gradientWarm} />

      <View style={styles.center}>
        <View style={styles.card}>
          <View style={styles.logoBox}>
            <Text style={styles.logoText}>LOGO</Text>
          </View>

          <Text style={styles.title}>Palpite da Copa 2026</Text>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Seu nome</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Digite seu nome"
              placeholderTextColor="#B87B92"
              style={styles.input}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Quem ganha a selecao</Text>
            <Pressable
              onPress={() => setIsOpen((current) => !current)}
              style={styles.selectButton}>
              <Text style={[styles.selectText, !winner && styles.placeholder]}>
                {selectedLabel}
              </Text>
              <Text style={styles.chevron}>{isOpen ? '^' : 'v'}</Text>
            </Pressable>

            {isOpen && (
              <ScrollView style={styles.options} nestedScrollEnabled>
                {teams.map((team) => (
                  <Pressable
                    key={team}
                    onPress={() => {
                      setWinner(team);
                      setIsOpen(false);
                    }}
                    style={[
                      styles.option,
                      winner === team && styles.optionSelected,
                    ]}>
                    <Text
                      style={[
                        styles.optionText,
                        winner === team && styles.optionTextSelected,
                      ]}>
                      {team}
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAD8E5',
  },
  gradientBase: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#F8C8D8',
  },
  gradientLight: {
    position: 'absolute',
    top: -130,
    left: -80,
    width: 360,
    height: 360,
    borderRadius: 180,
    backgroundColor: '#FFF4F8',
  },
  gradientWarm: {
    position: 'absolute',
    right: -120,
    bottom: -140,
    width: 430,
    height: 430,
    borderRadius: 215,
    backgroundColor: '#F2AFC8',
    opacity: 0.65,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    paddingHorizontal: 24,
    paddingVertical: 28,
    shadowColor: '#B85F80',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.18,
    shadowRadius: 30,
    elevation: 10,
  },
  logoBox: {
    alignSelf: 'center',
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFE8F1',
    borderWidth: 1,
    borderColor: '#F5B8CD',
    marginBottom: 20,
  },
  logoText: {
    color: '#C55C83',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0,
  },
  title: {
    color: '#7A2746',
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 28,
  },
  fieldGroup: {
    gap: 8,
    marginBottom: 18,
  },
  label: {
    color: '#81314F',
    fontSize: 14,
    fontWeight: '700',
  },
  input: {
    height: 52,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8A8BF',
    backgroundColor: '#FFF9FB',
    paddingHorizontal: 16,
    color: '#5C1F38',
    fontSize: 16,
  },
  selectButton: {
    minHeight: 52,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8A8BF',
    backgroundColor: '#FFF9FB',
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  selectText: {
    flex: 1,
    color: '#5C1F38',
    fontSize: 16,
  },
  placeholder: {
    color: '#B87B92',
  },
  chevron: {
    color: '#B64D76',
    fontSize: 12,
    fontWeight: '900',
  },
  options: {
    maxHeight: 220,
    marginTop: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F0BDD0',
    backgroundColor: '#FFF9FB',
  },
  option: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F8DDE8',
  },
  optionSelected: {
    backgroundColor: '#FAD8E5',
  },
  optionText: {
    color: '#6A2943',
    fontSize: 15,
  },
  optionTextSelected: {
    color: '#A83262',
    fontWeight: '800',
  },
});
