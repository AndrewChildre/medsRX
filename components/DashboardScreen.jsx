import React, { useEffect, useState } from 'react';
import {
	Button,
	FlatList,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign, Fontisto, FontAwesome } from '@expo/vector-icons';

// --------------------------------Start Styles--------------------

const styles = StyleSheet.create({
	hr: {
		borderColor: 'lightgray',
		borderWidth: 1,
		width: '80%',
		marginLeft: '10%',
	},
	container: {
		display: 'flex',
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	section: {
		padding: 5,
		margin: 10,
	},
	circleContainer: {
		flexDirection: 'row',
		paddingHorizontal: 25,
	},
	circle: {
		marginRight: 5,
	},
	medicationSection: {
		marginTop: 5,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: 'lightgray',
		borderRadius: 10,
	},
	barContainer: {
		height: 10,
		width: '100%',
		backgroundColor: 'navajowhite',
		borderRadius: 10,
		marginBottom: 20,
	},
	buddy: {
		borderWidth: 1,
		borderColor: 'lightgray',
		padding: 10,
	},
	historyDay: {},
	textTitle: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 20,
		paddingBottom: 20,
	},
	fullSchedule: {
		fontSize: 15,
		fontWeight: '600',
		color: 'blue',
	},
	morningMedsBorder: {
		borderWidth: 1,
		borderColor: 'lightgray',
		borderRadius: 10,
	},
	banner: {
		height: 10,
		backgroundColor: '#d1bf88',
		marginBottom: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	morningMeds: {
		fontSize: 18,
		fontWeight: '500',
	},
	routineMeds: {
		color: '#787878',
		fontSize: 18,
		paddingVertical: 8,
		paddingHorizontal: 25,
	},
	morningMedsItems: {
		padding: 10,
	},
	pillsIcons: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 15,
	},
	medText: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingVertical: 10,
	},
	btn: {
		justifyContent: 'center',
		alignItems: 'flex-end',
		flex: 1,
		paddingRight: 20,

	},
	medTime: {
		color: '#787878',
		fontSize: 15,
	},
	medType: {
		fontSize: 18,
		fontWeight: '600',
		paddingVertical: 1,
	},
	asNeededSection: {
		padding: 5,
		margin: 15,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: 'lightgray',
		borderRadius: 10,
		padding: 10,
	},
	textCont: {
		flex: 1,
	},
	textCont1: {
		marginRight: 10,
	},
	asNeededText: {
		fontSize: 18,
		fontWeight: '600',
		paddingBottom: 8,
	},
	okToTakeText: {
		color: '#04d43c',
	},
	dashboard: {
		paddingVertical: 10,
		borderBottomWidth: 2,
		borderBottomColor: 'lightgray',
	},
	dashboardText: {
		fontSize: 30,
		fontWeight: '700',
	},
	rewardsText: {
		fontSize: 18,
		fontWeight: '600',
	},
	rewardsHeaderContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 8,
		paddingBottom: 10,
	},
	rewardsTextContainer: {
		flex: 1,
	},
	rewardsContentContainer: {
		padding: 10,
		borderWidth: 1,
		borderColor: 'lightgray',
		borderRadius: 10,
	},
	rewardsNum: {
		fontSize: 30,
		flexDirection: 'row',
		paddingBottom: 10,
	},
	points: {
		fontSize: 18,
		color: '#787878',
	},
	starsEarned: {
		fontSize: 14,
		fontWeight: '600',
	},
	starText: {
		fontSize: 14,
		fontWeight: '300',
	},
	rewardIcons: {
		paddingRight: 6,
		paddingBottom: 8,
	},
	expand: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	expandText: {
		fontSize: 17,
		color: 'blue',
		paddingTop: 10,
	},
});

//-----------------------------End Styles---------------------

// ------------------------------Start Take Meds Section--------------
function TakeMeds() {
	const [check, setCheck] = useState(
		<FontAwesome name='circle-thin' size={24} color='blue' />
	);
	const [take, setTake] = useState([
		{
			id: 32385,
			name: 'Vitamin C',
			isTaken: false,
			dueTime: 6,
			dosage: 1,
			dosageType: 'tablet',
		},
		{
			id: 12301,
			name: 'Magnesium',
			isTaken: false,
			dueTime: 6,
			dosage: 1,
			dosageType: 'tablet',
		},
		{
			id: 76278,
			name: 'Prednisolone',
			isTaken: false,
			dueTime: 6,
			dosage: 1,
			dosageType: 'pill',
		},
		{
			id: 47356,
			name: 'Lisinopril',
			isTaken: true,
			dueTime: 6,
			dosage: 1,
			dosageType: 'pill',
		},
		{
			id: 97553,
			name: 'Iron',
			isTaken: true,
			dueTime: 6,
			dosage: 1,
			dosageType: 'pill',
		},
		{
			id: 18957,
			name: 'Vitamin D',
			isTaken: true,
			dueTime: 6,
			dosage: 2,
			dosageType: 'pill',
		},
	]);

	const pressHandler = (id) => {
		setTake((prevState) => {
			return prevState.filter((med) => med.id != id);
		});
		setCheck(<AntDesign name='checkcircle' size={24} color='blue' />);
	};

	return (
		<View style={styles.section}>
			<View style={styles.dashboard}>
				<Text style={styles.dashboardText}>
					Dashboard <Fontisto name='day-sunny' size={24} color='#d1bf88' />
				</Text>
			</View>
			<View style={styles.header}>
				<Text style={styles.textTitle}>Take your meds</Text>
				<TouchableOpacity>
					<Text style={styles.fullSchedule}>
						Full Schedule
						<AntDesign name='right' size={15} color='blue' />
					</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.morningMedsBorder}>
				<View style={styles.banner}></View>

				<View style={styles.morningMedsItems}>
					<Text style={styles.morningMeds}>
						<Fontisto name='day-sunny' size={19} color='#d1bf88' /> Morning
						Medication
					</Text>

					<Text style={styles.routineMeds}>6 routine meds</Text>

					<View style={styles.circleContainer}>
						<View style={styles.circle}>{check}</View>
						<View style={styles.circle}>
							<FontAwesome name='circle-thin' size={24} color='blue' />
						</View>
						<View style={styles.circle}>
							<FontAwesome name='circle-thin' size={24} color='blue' />
						</View>
						<View style={styles.circle}>
							<FontAwesome name='circle-thin' size={24} color='blue' />
						</View>
						<View style={styles.circle}>
							<FontAwesome name='circle-thin' size={24} color='blue' />
						</View>
						<View style={styles.circle}>
							<FontAwesome name='circle-thin' size={24} color='blue' />
						</View>
					</View>
				</View>
			</View>

			<FlatList
				data={take}
				renderItem={({ item }) => (
					<View style={styles.medicationSection}>
						<View style={styles.pillsIcons}>
							<Fontisto name='pills' size={34} color='blue' />
						</View>
						<View style={styles.medText}>
							<Text style={styles.medTime}>
								6:00 AM <Fontisto name='day-sunny' size={19} color='#d1bf88' />
							</Text>
							<Text style={styles.medType}>{item.name}</Text>
							<Text>Take 1 tablet</Text>
						</View>

						<View style={styles.btn}>
							<Button title='Take' onPress={() => pressHandler(item.id)} />
						</View>
					</View>
				)}
			/>
		</View>
	);
}

// ------------------------------------End Take Meds Section----------------

function AsNeeded() {
	return (
		<View style={styles.asNeededSection}>
			<View style={styles.textCont}>
				<Text style={styles.asNeededText}>As-needed medication</Text>
				<Text style={styles.okToTakeText}>
					<AntDesign name='check' size={16} color='#04d43c' /> 3 of 5 meds okay
					to take
				</Text>
			</View>
			<View style={styles.textCont1}>
				<Button title='View' />
			</View>
		</View>
	);
}

function Rewards() {
	return (
		<View style={styles.section}>
			<View style={styles.rewardsHeaderContainer}>
				<View style={styles.rewardsTextContainer}>
					<Text style={styles.rewardsText}>Earn Rewards</Text>
				</View>
				<View rewardsBtnContainer>
					<TouchableOpacity>
						<Text style={styles.fullSchedule}>
							All Rewards
							<AntDesign name='right' size={15} color='blue' />
						</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.rewardsContentContainer}>
				<Text style={styles.rewardsNum}>
					80{' '}
					<Text style={styles.points}>
						<Fontisto name='star' size={18} color='#d1bf88' /> Points
					</Text>
				</Text>
				<View style={styles.barContainer}>
					<View
						style={{
							backgroundColor: 'orange',
							position: 'absolute',
							width: '20%',
							height: '100%',
							borderRadius: 10,
						}}
					/>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.rewardIcons}>
						<AntDesign name='checkcircle' size={16} color='blue' />
					</View>
					<Fontisto name='star' size={14} color='#d1bf88' />
					<Text style={styles.starsEarned}>
						{' '}
						5 Stars earned{' '}
						<Text style={styles.starText}>Open the app once a day</Text>
					</Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.rewardIcons}>
						<AntDesign name='checkcircle' size={16} color='blue' />
					</View>
					<Fontisto name='star' size={14} color='#d1bf88' />
					<Text style={styles.starsEarned}>
						{' '}
						15 Stars Earned{' '}
						<Text style={styles.starText}> 3 meds taken today</Text>
					</Text>
				</View>

				<View style={{ flexDirection: 'row' }}>
					<View style={styles.rewardIcons}>
						<FontAwesome name='circle-thin' size={17} color='blue' />
					</View>
					<Fontisto name='star' size={14} color='#d1bf88' />
					<Text style={styles.starsEarned}>
						{' '}
						0 Stars earned{' '}
						<Text style={styles.starText}>Daily health survey</Text>
					</Text>
				</View>

				<View style={styles.expand}>
					<Text style={styles.expandText}>
						Expand{'  '}
						<AntDesign name='down' size={17} color='blue' />
					</Text>
				</View>
			</View>
		</View>
	);
}

function buddyItem({ item: buddy }) {
	return (
		<View key={buddy.id} style={styles.buddy}>
			<Image
				source={{ uri: buddy.avatarUrl }}
				style={{ height: 40, width: 40 }}
			/>
			<Text>{buddy.name}</Text>
			<Text>All-time adherence</Text>
			<Text>{String(buddy.adherence).slice(0, 2)}%</Text>
		</View>
	);
}

function Buddies() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: 'FETCH_BUDDIES' });
	}, []);
	const buddyList = useSelector((state) => state.buddies);

	return (
		<View style={styles.section}>
			<Text>Check on buddies</Text>
			<Button title='All buddies' />
			<FlatList
				data={buddyList.slice(0, 3)}
				renderItem={buddyItem}
				keyExtractor={(buddy) => String(buddy.id)}
			/>
		</View>
	);
}

function RecentHistory() {
	return (
		<View style={styles.section}>
			<Text>Past 7 days</Text>
			<Button title='Medication history' />
			<Text>Medication Progress</Text>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				<View style={styles.historyDay}>
					<Text>Th</Text>
					<Text>12</Text>
					<View style={styles.barContainer}>
						<View
							style={{
								backgroundColor: 'orange',
								width: '50%',
								height: '100%',
							}}
						/>
					</View>
				</View>
				<View style={styles.historyDay}>
					<Text>Fri</Text>
					<Text>13</Text>
					<View style={styles.barContainer}>
						<View
							style={{
								backgroundColor: 'orange',
								width: '100%',
								height: '100%',
							}}
						/>
					</View>
				</View>
				<View style={styles.historyDay}>
					<Text>Sat</Text>
					<Text>14</Text>
					<View style={styles.barContainer}>
						<View
							style={{
								backgroundColor: 'orange',
								width: '100%',
								height: '100%',
							}}
						/>
					</View>
				</View>
				<View style={styles.historyDay}>
					<Text>Sun</Text>
					<Text>15</Text>
					<View style={styles.barContainer}>
						<View
							style={{
								backgroundColor: 'orange',
								width: '50%',
								height: '100%',
							}}
						/>
					</View>
				</View>
				<View style={styles.historyDay}>
					<Text>Mon</Text>
					<Text>16</Text>
					<View style={styles.barContainer}>
						<View
							style={{
								backgroundColor: 'orange',
								width: '50%',
								height: '100%',
							}}
						/>
					</View>
				</View>
				<View style={styles.historyDay}>
					<Text>Tues</Text>
					<Text>17</Text>
					<View style={styles.barContainer}>
						<View
							style={{
								backgroundColor: 'orange',
								width: '50%',
								height: '100%',
							}}
						/>
					</View>
				</View>
				<View style={styles.historyDay}>
					<Text>Wed</Text>
					<Text>18</Text>
					<View style={styles.barContainer}>
						<View
							style={{
								backgroundColor: 'orange',
								width: '50%',
								height: '100%',
							}}
						/>
					</View>
				</View>
			</View>
		</View>
	);
}

function DashboardScreen() {
	return (
		<ScrollView>
			<TakeMeds />
			<View style={styles.hr} />
			<AsNeeded />
			<View style={styles.hr} />
			<Rewards />
			<View style={styles.hr} />
			<Buddies />
			<View style={styles.hr} />
			<RecentHistory />
		</ScrollView>
	);
}

export default DashboardScreen;
